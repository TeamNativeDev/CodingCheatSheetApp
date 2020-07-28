import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TipsPreview from './TipsPreview';

const Category = (props) => {
  const { title, color } = props;
  const containerColor = {
    backgroundColor: color,
  };
  return (
    <View style={[styles.categoryBox, containerColor]}>
      <Text style={styles.boxText}>{title}</Text>
      <TipsPreview />
      {/* for the tips preview, would need to pass the tips as a prop to the tips
      preview component, from this comoponents props as long as the tips for 
      each category is a nested array in the category from the backend */}
    </View>
  );
};

const styles = StyleSheet.create({
  categoryBox: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  boxText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Category;
