import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    AudioModule,
    RecordingPresets,
    setAudioModeAsync,
    useAudioRecorder,
    useAudioRecorderState,
} from 'expo-audio';
import * as FileSystem from 'expo-file-system';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

export type RecordingMeta = {
  uri: string;
  name: string;
  createdAt: number;
};

const STORAGE_KEY = 'recordingData';
const RECORDINGS_DIR = FileSystem.documentDirectory + 'recordings/';

export function useRecordings() {
  const recorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);
  const recorderState = useAudioRecorderState(recorder);

  const [recordings, setRecordings] = useState<RecordingMeta[]>([]);

  useEffect(() => {
    (async () => {
      const info = await FileSystem.getInfoAsync(RECORDINGS_DIR);
      if (!info.exists) {
        await FileSystem.makeDirectoryAsync(RECORDINGS_DIR, { intermediates: true });
      }

      const json = await AsyncStorage.getItem(STORAGE_KEY);
      const metaMap: Record<string, { name: string; createdAt: number }> = json
        ? JSON.parse(json)
        : {};

      const files = await FileSystem.readDirectoryAsync(RECORDINGS_DIR);
      const loaded: RecordingMeta[] = files
        .map((fname) => {
          const uri = RECORDINGS_DIR + fname;
          const meta = metaMap[uri];
          return {
            uri,
            name: meta?.name ?? 'Untitled',
            createdAt: meta?.createdAt ?? 0,
          };
        })
        .sort((a, b) => b.createdAt - a.createdAt);

      setRecordings(loaded);
    })();

    (async () => {
      const status = await AudioModule.requestRecordingPermissionsAsync();
      if (!status.granted) {
        Alert.alert('Microphone permission is required to record.');
      }
      await setAudioModeAsync({
        allowsRecording: true,
        playsInSilentMode: true,
      });
    })();
  }, []);

  const startRecording = async () => {
    await recorder.prepareToRecordAsync();
    recorder.record();
  };

  const stopRecording = async () => {
    await recorder.stop();
    const tempUri = recorder.uri!;
    const timestamp = Date.now();
    const ext = RecordingPresets.HIGH_QUALITY.extension;
    const filename = `recording-${timestamp}${ext}`;
    const newUri = RECORDINGS_DIR + filename;

    await FileSystem.moveAsync({ from: tempUri, to: newUri });

    const meta = { name: 'Untitled', createdAt: timestamp };
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    const map = json ? JSON.parse(json) : {};
    map[newUri] = meta;
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(map));

    setRecordings((prev) => [{ uri: newUri, ...meta }, ...prev]);
  };

  const deleteRecording = async (uri: string) => {
    await FileSystem.deleteAsync(uri);
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    const map = json ? JSON.parse(json) : {};
    delete map[uri];
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(map));
    setRecordings((prev) => prev.filter((r) => r.uri !== uri));
  };

  const renameRecording = async (uri: string, newName: string) => {
    const name = newName.trim() || 'Untitled';
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    const map = json ? JSON.parse(json) : {};
    if (map[uri]) map[uri].name = name;
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(map));
    setRecordings((prev) =>
      prev.map((r) => (r.uri === uri ? { ...r, name } : r))
    );
  };

  return {
    recordings,
    recorderState,
    startRecording,
    stopRecording,
    deleteRecording,
    renameRecording,
  };
}