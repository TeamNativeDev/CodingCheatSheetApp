import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import TypedText from '../components/TypedText';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        Hello <TypedText style={styles.text} />
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 3,
    paddingVertical: 20,
    marginBottom: 20,
    backgroundColor: '#2aa198',
  },
  mainText: {
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
