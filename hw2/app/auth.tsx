import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LoginForm from './login';
import SignUpForm from './signUp';

const AuthScreen = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.headerText, !isLogin && styles.active]}>Sign Up</Text>
        <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
          <Text style={[styles.headerText, isLogin && styles.active]}>
            {isLogin ? 'Sign Up' : 'Login'}
          </Text>
        </TouchableOpacity>
      </View>
      {isLogin ? <LoginForm /> : <SignUpForm />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  headerText: { fontSize: 24, color: 'gray' },
  active: { color: 'green', fontWeight: 'bold' },
});

export default AuthScreen;
