import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import TipBox from './components/TipBox';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <TipBox />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
