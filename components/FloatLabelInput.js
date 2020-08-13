import React, { useState, useRef } from 'react';
import { StyleSheet, View, TextInput, Animated } from 'react-native';

const FloatLabelInput = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedText = useRef(new Animated.Value(25)).current;

  const animate = (toValue) =>
    Animated.timing(animatedText, {
      toValue,
      duration: 500,
      useNativeDriver: true,
    }).start();

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
      fontSize: 16,
      color: props.theme || 'blue',
      transform: [{ translateY: animatedText }],
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
      <Animated.Text style={styles.label}>
        {isFocused ? secondLabel : mainLabel}
      </Animated.Text>
      <TextInput
        {...props}
        placeholder={isFocused ? null : mainLabel}
        // strange behavior on the TipModal form because multiline ???
        placeholderTextColor={code ? 'white' : 'black'}
        onChangeText={(text) => setValue(text)}
        value={value}
        style={styles.input}
        onFocus={() => {
          setIsFocused(true);
          animate(0);
        }}
        onBlur={() => {
          if (value === '') {
            setIsFocused(false);
            animate(25);
          }
        }}
      />
    </View>
  );
};

export default FloatLabelInput;
