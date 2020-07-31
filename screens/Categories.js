import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Category from '../components/Category';

const Categories = ({ navigation }) => {
  // console.warn(navigation.navigate);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    // fetch('https://flatiron-cheat-sheet.herokuapp.com/api/v1/categories')
    fetch('http://localhost:3000/api/v1/categories')
      .then((resp) => resp.json())
      .then((data) => setCategories(data));
    // .then(console.warn(categories));
  }, []);
  return (
    <View style={styles.container}>
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
