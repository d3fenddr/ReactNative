import { StyleSheet, View } from 'react-native';
import RatingCard from '../components/RatingCard';

export default function RatingScreen() {
  return (
    <View style={styles.container}>
      <RatingCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4CAF50',
    paddingTop: 50,
  },
});