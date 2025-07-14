import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Todo } from '../context/TodoContext';

interface TodoListItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, onToggle, onRemove }) => (
  <View style={[styles.container, todo.completed && styles.completed]}>
    <TouchableOpacity onPress={() => onToggle(todo.id)} style={styles.checkbox}>
      {todo.completed && <Ionicons name="checkmark" size={16} color="#fff" />}
    </TouchableOpacity>
    <Text style={[styles.text, todo.completed && styles.textCompleted]}>{todo.title}</Text>
    <TouchableOpacity onPress={() => onRemove(todo.id)}>
      <Ionicons name="trash" size={20} color="#900" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    marginHorizontal: 16,
    marginVertical: 4,
    borderRadius: 8,
    elevation: 2
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#5E35B1',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    backgroundColor: '#fff'
  },
  text: { flex: 1, fontSize: 16, color: '#333' },
  completed: { backgroundColor: '#e0e0e0' },
  textCompleted: { textDecorationLine: 'line-through', color: '#888' }
});
