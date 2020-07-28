import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Category = (props, { navigation }) => {
  const { title, color } = props;
  const containerColor = {
    backgroundColor: color,
  };
  // console.warn(props, navigation);
  return (
    <View style={[styles.categoryBox, containerColor]}>
      <Text style={styles.boxText}>{title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryBox: {
    // backgroundColor: 'bisque',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  boxText: {
    fontWeight: 'bold',
  },
});

export default Category;
