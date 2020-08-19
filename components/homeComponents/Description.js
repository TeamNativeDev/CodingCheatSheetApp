import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WHITE } from '../../styles/Pallete';
import { borderRadius, shadow } from '../../styles/MainStyles';

const Description = () => {
  return (
    <View style={styles.descriptionContainer}>
      <Text style={styles.description}>
        This App has been created to help future Flatiron Students and Alumni to
        have a handful CheatSheet always in your Pocket.
      </Text>
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({
  descriptionContainer: {
    ...shadow,
    ...borderRadius,
    backgroundColor: WHITE,
    width: '90%',
    height: '20%',
    fontSize: 18,
    padding: 10,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
  },
});
