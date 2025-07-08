import { StyleSheet, View } from 'react-native';

export default function BottomNavDots() {
  return (
    <View style={styles.container}>
      {[0, 1, 2, 3, 4].map((i) => (
        <View
          key={i}
          style={[styles.dot, i === 0 ? styles.activeDot : styles.inactiveDot]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  dot: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginBottom: 10,
  },
  activeDot: {
    backgroundColor: '#4CAF50',
  },
  inactiveDot: {
    backgroundColor: '#ccc',
  },
});
