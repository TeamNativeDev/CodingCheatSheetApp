import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { borderRadius, shadow } from '../styles/MainStyles';

const AppButton = ({ onPress, style = {}, children }) => {
  const innerStyles = StyleSheet.create({
    button: {
      ...borderRadius,
      ...shadow,
      backgroundColor: 'teal',
      paddingHorizontal: 10,
      paddingVertical: 20,
      margin: 10,
      alignItems: 'center',
      // it will overwrite any style if given
      ...style,
    },
  });
  return (
    <TouchableOpacity onPress={() => onPress()} style={innerStyles.button}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
