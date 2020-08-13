import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Hello Flatironers !</Text>
      <View>
        <Text style={styles.mainText}>
          {' '}
          App logo, Cards about us, description
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
