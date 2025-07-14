import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

interface InputProps { onAdd: (title: string) => void; }

export const Input: React.FC<InputProps> = ({ onAdd }) => {
  const [text, setText] = useState('');
  const handleAdd = () => {
    if (text.trim().length === 0) return;
    onAdd(text.trim());
    setText('');
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Task Title"
        value={text}
        onChangeText={setText}
      />
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 16
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
    marginRight: 8
  }
});