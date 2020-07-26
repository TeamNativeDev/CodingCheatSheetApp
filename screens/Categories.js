import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Category from '../components/Category';

const CategoryTitles = [
  { title: 'HTML', hexCode: '#A5D0DA' },
  { title: 'JavaScript', hexCode: '#F8FA31' },
  { title: 'Ruby', hexCode: '#FF576C' },
  { title: 'CSS', hexCode: '#D1B0FF' },
];

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}> Software Engineering Categories:</Text>
      <FlatList
        data={CategoryTitles}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <Category categoryName={item.title} hexCode={item.hexCode} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 30,
  },

  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Categories;
