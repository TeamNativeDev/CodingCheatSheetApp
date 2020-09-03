import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WHITE } from '../../styles/Pallete';
import { borderRadius, shadow, absoluteCenter } from '../../styles/MainStyles';

const Description = () => {
  return (
    <View style={styles.descriptionContainer}>
      <Text style={styles.description}>
        This App has been created to help people learning to code or for
        developers to have a helpful cheat sheet in your pocket at all times.
      </Text>
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({
  descriptionContainer: {
    ...shadow,
    ...borderRadius,
    ...absoluteCenter,
    backgroundColor: WHITE,
    width: '90%',
    height: '20%',
    padding: 10,
  },
  description: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
});
