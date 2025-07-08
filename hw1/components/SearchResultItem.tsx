import { StyleSheet, Text, View } from 'react-native';

export default function SearchResultItem({ title }: { title: string }) {
  return (
    <View style={styles.item}>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    marginLeft: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});