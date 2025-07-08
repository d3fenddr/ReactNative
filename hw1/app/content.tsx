import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BottomNavDots from '../components/BottomNavDots';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import SearchResultItem from '../components/SearchResultItem';

const data = Array.from({ length: 6 }, (_, i) => ({ id: i.toString(), title: 'Search result' }));

export default function ContentScreen() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <Header title="Content" left="Back" right="Filter" />
        <SearchBar />
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <SearchResultItem title={item.title} />}
          ListFooterComponent={
            <TouchableOpacity onPress={() => router.push('/rating')} style={styles.button}>
              <Text style={styles.buttonText}>Go to Rating Page</Text>
            </TouchableOpacity>
          }
          showsVerticalScrollIndicator={false}
        />
      </View>
      <BottomNavDots />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  button: {
    backgroundColor: '#4CAF50',
    marginTop: 20,
    marginBottom: 40,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
