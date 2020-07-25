import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Tips = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}> Here are the Category Tips:</Text>
      <View style={styles.tipBox}>
        <Text style={styles.boxText}> Tip 1 </Text>
      </View>
      <View style={styles.tipBox}>
        <Text style={styles.boxText}> Tip 2 </Text>
      </View>
      <View style={styles.tipBox}>
        <Text style={styles.boxText}> Tip 3 </Text>
      </View>
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

export default Tips;
