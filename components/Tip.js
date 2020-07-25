import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Tip = ({ tipName }) => {
  return (
    <View style={styles.tipBox}>
      <Text style={styles.boxText}>{tipName} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tipBox: {
    backgroundColor: 'bisque',
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
