import React from "react";
import { View, StyleSheet } from "react-native";
import AuthScreen from "./auth";

export default function Index() {
  return (
    <View style={styles.container}>
      <AuthScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 }
});