import React from 'react';
import { SafeAreaView, StyleSheet, Image } from 'react-native';
import { WHITE } from '../styles/Pallete';
import Gradient from '../helpers/Gradient';
import Description from '../components/HomeComponents/Description';
import Greetings from '../components/HomeComponents/Greetings';
import BySection from '../components/HomeComponents/BySection';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Gradient />
      <Image source={require('../assets/logo.png')} />
      <Greetings />
      <Description />
      <BySection />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: WHITE,
    flex: 1,
    paddingTop: 50,
  },
});

export default Home;
