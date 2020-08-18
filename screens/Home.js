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

import Constants from 'expo-constants';
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      
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
          <View style={styles.byText}>
            <View style={[styles.base, styles.member]}>
              <Text>Biagio</Text>
            </View>
            <View style={[styles.base, styles.member]}>
              <Text>LorryDriveloper</Text>
            </View>
          </View>
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
    width: '90%',
    padding: 15,
    alignItems: 'center',
  },
  byText: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  member: {
    ...absoluteCenter,
    height: 75,
    width: 150,
  },
  link: {
    color: '#00aaff',
    textDecorationLine: 'underline',
    fontSize: 28,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
});

export default Home;
