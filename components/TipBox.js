import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Tip from './Tip';

const TipBox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}> Here are the Category Tips:</Text>
      <Tip tipName="Tip 1" hexCode="#33A5FF" />
      <Tip tipName="Tip 2" hexCode="#8986B7" />
      <Tip tipName="Tip 3" hexCode="#B7EC7F" />
      <Tip tipName="Tip 4" hexCode="#E57872" />
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

export default TipBox;
