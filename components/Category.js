import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { shadow, borderRadius } from '../styles/MainStyles';

const Category = (props) => {
  const { title, color } = props;
  const containerColor = {
    backgroundColor: color,
  };

  return (
    <View style={[styles.categoryBox, containerColor]}>
      <Text style={styles.boxText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryBox: {
    ...shadow,
    ...borderRadius,
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
