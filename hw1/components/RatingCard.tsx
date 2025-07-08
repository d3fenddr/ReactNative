import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function RatingCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.stars}>★★★★★</Text>
      <Text style={styles.title}>Rate our app</Text>
      <Text style={styles.text}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique non sapien vulputate facilisis. Praesent id massa sed metus faucibus gravida. Quisque vestibulum, mi eu rutrum consectetur, lacus purus elementum purus, finibus ullamcorper felis magna at diam. Nullam imperdiet nulla velit, sed mattis libero consectetur ac.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>I love it!</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.link}>Don't like the app? Let us know.</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  stars: {
    fontSize: 40,
    marginBottom: 15,
    color: '#FFD700',
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 120,
    borderRadius: 17,
    marginBottom: 10,
  },
  buttonText: {
    marginHorizontal: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  link: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
});