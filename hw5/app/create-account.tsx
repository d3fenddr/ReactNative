import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function CreateAccount() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [phone, setPhone] = useState('');
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Create{`\n`}Account</Text>
      <TouchableOpacity style={styles.avatarPlaceholder}>
        <Ionicons name="camera-outline" size={30} color="#0057FF" />
      </TouchableOpacity>
      <TextInput
        style={styles.input} placeholder="Email"
        value={email} onChangeText={setEmail}
      />
      <TextInput
        style={styles.input} placeholder="Password" secureTextEntry
        value={pass} onChangeText={setPass}
      />
      <View style={styles.phoneInput}>
        <Text style={styles.flag}>🇬🇧</Text>
        <TextInput
          style={styles.phoneTextInput} placeholder="Your number" keyboardType="phone-pad"
          value={phone} onChangeText={setPhone}
        />
      </View>
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => router.replace('./home')}
      >
        <Text style={styles.primaryButtonText}>Done</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkButton} onPress={() => router.back()}>
        <Text style={styles.linkText}>Cancel</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 28, fontWeight: 'bold' },
  avatarPlaceholder: {
    marginVertical: 20, borderRadius: 50, borderWidth: 1, borderColor: '#0057FF', padding: 20, alignSelf: 'center'
  },
  input: {
    height: 50, backgroundColor: '#f0f0f0', borderRadius: 25, paddingHorizontal: 20, marginTop: 10
  },
  phoneInput: {
    flexDirection: 'row', alignItems: 'center', height: 50, backgroundColor: '#f0f0f0',
    borderRadius: 25, paddingHorizontal: 20, marginTop: 10
  },
  flag: { fontSize: 24, marginRight: 10 },
  phoneTextInput: { flex: 1 },
  primaryButton: {
    backgroundColor: '#0057FF', paddingVertical: 15, borderRadius: 30, marginTop: 20, alignItems: 'center'
  },
  primaryButtonText: { color: '#fff', fontSize: 16 },
  linkButton: { marginTop: 15, alignItems: 'center' },
  linkText: { color: '#555' },
});