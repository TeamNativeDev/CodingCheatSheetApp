import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TypedText from '../components/homeComponents/TypedText';

const Greetings = () => {
  return (
    <View style={[styles.base, styles.textContainer]}>
      <Text style={styles.text}>
        Hello <TypedText style={styles.text} />
      </Text>
    </View>
  );
};

export default Greetings;

const styles = StyleSheet.create({
  textContainer: {
    width: '90%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
  },
});
