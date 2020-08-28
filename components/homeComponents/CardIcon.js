import React from 'react';
import { StyleSheet, Linking, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { borderRadius, shadow } from '../../styles/MainStyles';
import { WHITE } from '../../styles/Pallete';
import { TouchableOpacity } from 'react-native-gesture-handler';
const CardIcon = ({ link, icon }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => Linking.openURL(link)}>
        <AntDesign style={styles.icon} name={icon} size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default CardIcon;

const styles = StyleSheet.create({
  container: {
    ...borderRadius,
    ...shadow,
    backgroundColor: WHITE,
    padding: 3,
    margin: 3,
    transform: [{ rotateY: '-180deg' }],
  },
});
