import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import CategoryBox from './components/CategoryBox';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <CategoryBox />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
