import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Tip = ({ title, description, hexCode }) => {
  const containerColor = {
    backgroundColor: hexCode,
  };
  // console.warn(hexCode);
  return (
    <View style={[styles.tipBox, containerColor]}>
      <Text style={styles.boxText}>{title} </Text>
      <Text style={styles.boxText}>{description} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tipBox: {
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

export default Tip;
