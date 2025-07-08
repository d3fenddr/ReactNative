import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Header({ title, left, right }: { title: string, left?: string, right?: string }) {
  return (
    <View style={styles.container}>
      {left ? <TouchableOpacity><Text style={styles.sideText}>{left}</Text></TouchableOpacity> : <View />}
      <Text style={styles.title}>{title}</Text>
      {right ? <TouchableOpacity><Text style={styles.sideText}>{right}</Text></TouchableOpacity> : <View />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  sideText: {
    fontSize: 17,
    color: 'green',
  },
});