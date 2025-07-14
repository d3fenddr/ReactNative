import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

interface TodoContextData {
  todos: Todo[];
  addTodo: (title: string) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}

export const TodoContext = createContext<TodoContextData>({
  todos: [],
  addTodo: () => {},
  toggleTodo: () => {},
  removeTodo: () => {}
});

export const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => { loadTodos(); }, []);
  useEffect(() => { saveTodos(); }, [todos]);

  const loadTodos = async () => {
    try {
      const data = await AsyncStorage.getItem('@todos');
      if (data) setTodos(JSON.parse(data));
    } catch (e) {
      Alert.alert('Error', 'Failed to load todos.');
    }
  };

  const saveTodos = async () => {
    try {
      await AsyncStorage.setItem('@todos', JSON.stringify(todos));
    } catch (e) {
      Alert.alert('Error', 'Failed to save todos.');
    }
  };

  const addTodo = (title: string) => {
    setTodos(prev => [...prev, { id: Date.now().toString(), title, completed: false }]);
  };

  const toggleTodo = (id: string) => {
    setTodos(prev => prev.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const removeTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};