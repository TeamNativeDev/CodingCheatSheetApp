import React from 'react';
import { SafeAreaView, StyleSheet, Image } from 'react-native';
import { WHITE } from '../styles/Pallete';
import Gradient from '../components/Gradient';
import Description from '../components/homeComponents/Description';
import Greetings from './Greetings';
import BySection from '../components/homeComponents/BySection';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Gradient />
      <Image style={styles.logo} source={require('../assets/logo.png')} />
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
