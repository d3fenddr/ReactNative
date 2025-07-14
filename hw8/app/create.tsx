import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { TodoContext } from '../context/TodoContext';
import { Input } from '../components/Input';
export default function Create() {
  const { addTodo } = useContext(TodoContext);
  const router = useRouter();

  const handleAdd = (title: string) => {
    addTodo(title);
    router.back();
  };

  return (
    <View style={styles.container}>
      <Input onAdd={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f3f4f6' }
});