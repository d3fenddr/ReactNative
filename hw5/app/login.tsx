import React, { useState } from 'react';
import { View, SafeAreaView, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.topBackground} />
      <SafeAreaView style={styles.content}>
        <Text style={styles.header}>Login</Text>
        <Text style={styles.subheader}>Good to see you back! ♥</Text>
        <TextInput
          style={styles.input} placeholder="Email"
          value={email} onChangeText={setEmail}
        />
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push('./password')}
        >
          <Text style={styles.primaryButtonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkButton} onPress={() => router.back()}>
          <Text style={styles.linkText}>Cancel</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  topBackground: { position: 'absolute', top: 0, left: 0, right: 0, height: 250, backgroundColor: '#E6EEFF' },
  content: { flex: 1, padding: 20, alignItems: 'center' },
  header: { fontSize: 28, fontWeight: 'bold', alignSelf: 'flex-start', marginTop: 60 },
  subheader: { fontSize: 16, color: '#555', alignSelf: 'flex-start', marginVertical: 10 },
  input: { width: '100%', height: 50, backgroundColor: '#f0f0f0', borderRadius: 25, paddingHorizontal: 20 },
  primaryButton: {
    backgroundColor: '#0057FF', paddingVertical: 15, borderRadius: 30, width: '100%', alignItems: 'center', marginTop: 20
  },
  primaryButtonText: { color: '#fff', fontSize: 16 },
  linkButton: { marginTop: 15 },
  linkText: { color: '#555' },
});