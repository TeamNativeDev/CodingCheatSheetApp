import React, { useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Category from '../components/Category';

const Categories = ({ navigation, route }) => {
  const categories = route.params.categories;



  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}> All Categories:</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Tips', item)}>
            {/* using destructuring to clean & readable code */}
            <Category {...item} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 40,
  },

  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 30,
    marginBottom: 10,
  },
});

export default Categories;
