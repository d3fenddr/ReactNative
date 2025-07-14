import React, { useState } from 'react';
import { View, SafeAreaView, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Password() {
  const [pin, setPin] = useState('');
  const router = useRouter();

  const handleChange = (text: string) => {
    setPin(text);
    if (text.length === 6) {
      router.replace('./home');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBackground} />
      <SafeAreaView style={styles.content}>
        <View style={styles.avatarCircle}>
          <Ionicons name="person-circle-outline" size={80} color="#0057FF" />
        </View>
        <Text style={styles.header}>Hello, User!!</Text>
        <Text style={styles.subheader}>Type your password</Text>
        <TextInput
          style={styles.otpInput}
          keyboardType="numeric"
          secureTextEntry
          maxLength={6}
          value={pin}
          onChangeText={handleChange}
        />
        <TouchableOpacity onPress={() => router.push('./home')} style={styles.arrowButton}>
          <Ionicons name="arrow-forward-circle" size={40} color="#0057FF" />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  topBackground: { position: 'absolute', top: 0, left: 0, right: 0, height: 250, backgroundColor: '#0057FF' },
  content: { flex: 1, padding: 20, alignItems: 'center' },
  avatarCircle: {
    marginTop: 60, borderRadius: 40, backgroundColor: '#fff', padding: 5, elevation: 3
  },
  header: { fontSize: 28, fontWeight: 'bold', marginTop: 20 },
  subheader: { fontSize: 16, color: '#555', marginTop: 10 },
  otpInput: {
    width: '60%', height: 50, backgroundColor: '#f0f0f0', borderRadius: 10,
    textAlign: 'center', fontSize: 24, letterSpacing: 10, marginTop: 20
  },
  arrowButton: { marginTop: 20 },
});