import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const FloatLabelInput = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const {
    value,
    setValue,
    mainLabel,
    secondLabel = mainLabel,
    code = false,
  } = props;

  const styles = StyleSheet.create({
    floatLabel: {
      paddingHorizontal: 5,
      paddingTop: 25,
      marginBottom: 10,
    },
    label: {
      position: 'absolute',
      left: 10,
      top: isFocused ? 0 : 25,
      fontSize: isFocused ? 16 : 20,
      color: 'blue',
    },
    input: {
      padding: 5,
      fontSize: 20,
      borderBottomWidth: 2,
      borderBottomColor: isFocused ? 'blue' : 'black',
      textAlignVertical: 'top',
      backgroundColor: code ? 'black' : 'white',
      color: code ? 'white' : 'black',
    },
  });
  return (
    <View style={styles.floatLabel}>
      <Text style={styles.label}>{isFocused ? secondLabel : mainLabel}</Text>
      <TextInput
        {...props}
        placeholder={isFocused ? null : mainLabel}
        // strange behavior on the TipModal form because multiline ???
        placeholderTextColor={code ? 'white' : 'black'}
        onChangeText={(text) => setValue(text)}
        value={value}
        style={styles.input}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          if (value === '') {
            setIsFocused(false);
          }
        }}
      />
    </View>
  );
};

export default FloatLabelInput;
