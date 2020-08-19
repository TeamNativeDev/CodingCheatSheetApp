import React from 'react';
import { StyleSheet, Text, Linking } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
const CardIcon = ({ link, icon, text }) => {
  return (
    <Text style={styles.icon} onPress={() => Linking.openURL(link)}>
      <AntDesign name={icon} size={16} />
      {text}
    </Text>
  );
};

export default CardIcon;

const styles = StyleSheet.create({
  icon: {
    textDecorationLine: 'underline',
    marginVertical: 5,
  },
});
