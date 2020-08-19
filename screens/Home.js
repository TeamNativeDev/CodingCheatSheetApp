import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  View,
  Linking,
} from 'react-native';
import TypedText from '../components/TypedText';
import { borderRadius, shadow, absoluteCenter } from '../styles/MainStyles';
import { WHITE } from '../styles/Pallete';
import Gradient from '../components/Gradient';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Gradient />
      <View style={[styles.base]}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
      </View>
      <View style={[styles.base, styles.textContainer]}>
        <Text style={styles.text}>
          Hello <TypedText style={styles.text} />
        </Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text>Description</Text>
      </View>
      <View style={[styles.base, styles.byContainer]}>
        <View style={[absoluteCenter]}>
          <Text style={styles.text}>With love by</Text>
          <Text
            style={[styles.link, styles.text]}
            onPress={() => Linking.openURL('https://github.com/TeamNativeDev')}
          >
            Team Native Dev
          </Text>
          <View />
          <View style={styles.cardContainer} />
        </View>
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
    backgroundColor: WHITE,
    flex: 1,
  },
  logo: {
    marginVertical: 30,
  },
  textContainer: {
    width: '90%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
  },
  descriptionContainer: {
    ...shadow,
    ...borderRadius,
    backgroundColor: WHITE,
    width: '90%',
    height: '20%',
  },
  byContainer: {
    position: 'relative',
    width: '90%',
    padding: 15,
    alignItems: 'center',
  },
  cardContainer: {
    backgroundColor: 'red',
    width: 300,
    height: 50,
  },
  link: {
    color: '#00aaff',
    textDecorationLine: 'underline',
    fontSize: 28,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});

export default Home;
