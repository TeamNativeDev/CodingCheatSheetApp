import React from 'react';
import { Text, View, StyleSheet, SectionList } from 'react-native';
import Category from './Category';

// const CategoryS = [
//   {title: 'Category 1 title', data: ['']}
// ]

const CategoryBox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}> Software Engineering Categories:</Text>
      <Category categoryName="Ruby" hexCode="#33A5FF" />
      <Category categoryName="JavaScript" hexCode="#8986B7" />
      <Category categoryName="HTML" hexCode="#B7EC7F" />
      <Category categoryName="CSS" hexCode="#E57872" />
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

export default CategoryBox;
