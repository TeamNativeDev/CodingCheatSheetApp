import React from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
import MemberCard from './MemberCard';
import { absoluteCenter, shadow, borderRadius } from '../../styles/MainStyles';
import { WHITE } from '../../styles/Pallete';

const BySection = () => {
  return (
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
        <View style={styles.cardContainer}>
          <MemberCard
            name="Biagio"
            twitter={'https://twitter.com/mindful_dev'}
            linkedIn={'https://www.linkedin.com/in/biagio-mendolia-913069176/'}
            portfolio={'https://biagiomendolia.vercel.app/'}
            github={'https://github.com/biagioo'}
          />
          <MemberCard
            name="Lorrydriveloper"
            twitter={'https://twitter.com/lorrydriveloper'}
            linkedIn={'https://www.linkedin.com/in/pedro-david-garcia-lopez/'}
            portfolio={'https://www.lorrydriveloper.com'}
            github={'https://github.com/lorrydriveloper'}
          />
        </View>
      </View>
    </View>
  );
};

export default BySection;

const styles = StyleSheet.create({
  byContainer: {
    ...shadow,
    ...borderRadius,
    position: 'relative',
    width: '90%',
    padding: 15,
    alignItems: 'center',
    backgroundColor: WHITE,
  },
  cardContainer: {
    width: '100%',
    justifyContent: 'space-around',
    height: 75,
    flexDirection: 'row',
    marginTop: 10,
  },
  link: {
    color: '#00aaff',
    textDecorationLine: 'underline',
    fontSize: 28,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});
