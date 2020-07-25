import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Tip from './Tip';

const TipBox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}> Here are the Category Tips:</Text>
      <Tip tipName="Tip 1" />
      <Tip tipName="Tip 2" />
      <Tip tipName="Tip 3" />
      <Tip tipName="Tip 4" />
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

export default TipBox;
