import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Home Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  header: { fontSize: 24, fontWeight: 'bold' },
});