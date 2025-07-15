import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useRecordings } from '../hooks/useRecordings';
import { RecordingItem } from '../components/RecordingItem';

export default function HomeScreen() {
  const {
    recordings,
    recorderState,
    startRecording,
    stopRecording,
    deleteRecording,
    renameRecording,
  } = useRecordings();

  const isRecording = recorderState.isRecording;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.recordButton, isRecording && styles.recording]}
        onPress={isRecording ? stopRecording : startRecording}
      >
        <Text style={styles.recordText}>
          {isRecording ? 'STOP' : 'RECORD'}
        </Text>
      </TouchableOpacity>

      <FlatList
        data={recordings}
        keyExtractor={(item) => item.uri}
        renderItem={({ item }) => (
          <RecordingItem
            item={item}
            onRename={renameRecording}
            onDelete={deleteRecording}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No recordings</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  recordButton: {
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4caf50',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  recording: {
    backgroundColor: '#f44336',
  },
  recordText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  empty: { textAlign: 'center', color: '#999', marginTop: 32 },
});