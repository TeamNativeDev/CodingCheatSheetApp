import React from 'react';
import { StyleSheet, View } from 'react-native';
import CardIcon from './CardIcon';

const BackCard = ({ twitter, linkedIn, github, portfolio }) => {
  return (
    <View style={styles.iconContainer}>
      <CardIcon link={twitter} icon="twitter" text="Twitter" />
      <CardIcon link={linkedIn} icon="linkedin-square" text="LinkedIn" />
      <CardIcon link={github} icon="github" text="Github" />
      <CardIcon link={portfolio} icon="iconfontdesktop" text="Portfolio" />
    </View>
  );
};

export default BackCard;

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});
