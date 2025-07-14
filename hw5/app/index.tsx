import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function StartScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <Ionicons name="bag-outline" size={100} color="#0057FF" />
      <Text style={styles.title}>Shoppe</Text>
      <Text style={styles.subtitle}>
        Beautiful eCommerce UI Kit{`\n`}for your online store
      </Text>
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => router.push('./create-account')}
      >
        <Text style={styles.primaryButtonText}>Let's get started</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.linkButton}
        onPress={() => router.push('./login')}
      >
        <Text style={styles.linkText}>I already have an account →</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', backgroundColor: '#fff', paddingTop: 80 },
  title: { fontSize: 32, fontWeight: 'bold', marginTop: 20 },
  subtitle: { fontSize: 16, color: '#555', textAlign: 'center', marginVertical: 10 },
  primaryButton: {
    backgroundColor: '#0057FF', paddingVertical: 15, paddingHorizontal: 60, borderRadius: 30, marginTop: 20
  },
  primaryButtonText: { color: '#fff', fontSize: 16 },
  linkButton: { marginTop: 15 },
  linkText: { color: '#555' },
});