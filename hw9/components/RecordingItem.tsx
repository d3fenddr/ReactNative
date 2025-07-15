import { Ionicons } from '@expo/vector-icons';
import { useAudioPlayer } from 'expo-audio';
import React from 'react';
import {
    Alert,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { RecordingMeta } from '../hooks/useRecordings';

type Props = {
  item: RecordingMeta;
  onRename: (uri: string, newName: string) => void;
  onDelete: (uri: string) => void;
};

export const RecordingItem: React.FC<Props> = ({
  item,
  onRename,
  onDelete,
}) => {
  const player = useAudioPlayer({ uri: item.uri });
  const date = new Date(item.createdAt).toLocaleString();

  const promptRename = () => {
    if (Platform.OS === 'ios') {
      Alert.prompt(
        'Rename Recording',
        'Enter new name:',
        [
          { text: 'Cancel', style: 'cancel' },
          {
            text: 'OK',
            onPress: (newName?: string) => {
              const name = newName?.trim() || item.name;
              onRename(item.uri, name);
            },
          },
        ],
        'plain-text',
        item.name
      );
    } else {
      Alert.alert('Rename not supported on Android in this example.');
    }
  };

  return (
    <View style={styles.row}>
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => player.play()}>
          <Ionicons name="play-outline" size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={promptRename}>
          <Ionicons name="pencil-outline" size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(item.uri)}>
          <Ionicons name="trash-outline" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  info: { flex: 1 },
  name: { fontSize: 16, fontWeight: '500' },
  date: { fontSize: 12, color: '#666' },
  buttons: {
    flexDirection: 'row',
    width: 90,
    justifyContent: 'space-between',
  },
});