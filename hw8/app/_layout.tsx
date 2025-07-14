import React from 'react';
import { Stack } from 'expo-router';
import { TodoProvider } from '../context/TodoContext';

export default function Layout() {
  return (
    <TodoProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'My Todo List' }} />
        <Stack.Screen name="create" options={{ title: 'Add New Task' }} />
      </Stack>
    </TodoProvider>
  );
}