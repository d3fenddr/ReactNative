import { StyleSheet, TextInput, View } from 'react-native';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search" style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    borderRadius: 30,
    padding: 10,
    marginTop: 20,
    marginBottom: 5,
  },
  input: {
    fontSize: 15,
  },
});