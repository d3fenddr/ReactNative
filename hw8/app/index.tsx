import React, { useContext } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { TodoContext } from '../context/TodoContext';
import { TodoListItem } from '../components/TodoListItem';

export default function Home() {
  const { todos, toggleTodo, removeTodo } = useContext(TodoContext);

  return (
    <View style={styles.container}>
      {todos.length === 0 ? (
        <Text style={styles.empty}>No tasks. Add some!</Text>
      ) : (
        <FlatList
          data={todos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TodoListItem
              todo={item}
              onToggle={toggleTodo}
              onRemove={removeTodo}
            />
          )}
        />
      )}
      <Link href="/create" style={styles.addButton}>
        <Text style={styles.addButtonText}>Add New Task</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f3f4f6' },
  empty: { textAlign: 'center', marginTop: 32, color: '#888' },
  addButton: {
    backgroundColor: '#5E35B1',
    padding: 16,
    borderRadius: 24,
    margin: 16,
    alignItems: 'center'
  },
  addButtonText: { color: '#fff', fontWeight: 'bold' }
});