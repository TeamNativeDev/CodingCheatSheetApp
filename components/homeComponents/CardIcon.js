import React from 'react';
import { StyleSheet, Text, Linking } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
const CardIcon = ({ link, icon, text }) => {
  return (
    <Text style={styles.text} onPress={() => Linking.openURL(link)}>
      <AntDesign style={styles.icon} name={icon} size={16} /> {text}
    </Text>
  );
};

export default CardIcon;

const styles = StyleSheet.create({
  text: {
    textDecorationLine: 'underline',
    marginVertical: 5,
  },
});
