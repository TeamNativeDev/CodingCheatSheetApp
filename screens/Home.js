import React from 'react';
crimport { SafeAreaView, Text, StyleSheet, Image, View } from 'react-native';
import TypedText from '../components/TypedText';
import { borderRadius, shadow } from '../styles/MainStyles';
import { WHITE } from '../styles/Pallete';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.base]}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Hello <TypedText style={styles.text} />
        </Text>
      </View>
      <View>
        <Text style={styles.descriptionContainer}>Description</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  base: {
    ...shadow,
    ...borderRadius,
    backgroundColor: WHITE,
  },
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'blue',
    flex: 1,
  },
  logo: {
    marginVertical: 30,
  },
  textContainer: {
    ...borderRadius,
    ...shadow,
    backgroundColor: 'red',
    width: '90%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
  },
  descriptionContainer: {
    backgroundColor: 'yellow',
    width: '90%',
    height: '20%',
  },
});

export default Home;
