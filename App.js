import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import Tips from './components/Tips';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Tips />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
