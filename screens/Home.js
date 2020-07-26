import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Flatironers !</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
        <Text style={styles.text}>Click here to see Categories !</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 3,
    paddingVertical: 20,
    marginBottom: 20,
    backgroundColor: '#2aa198',
  },
});

export default Home;
