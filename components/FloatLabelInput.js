import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const FloatLabelInput = (props) => {
  const [isFocused, setIsFocused] = useState(false);

  console.warn(props);
  const styles = StyleSheet.create({
    floatLabel: {
      paddingHorizontal: 5,
      paddingTop: 18,
      marginBottom: 10,
    },
    label: {
      position: 'absolute',
      left: 10,
      top: isFocused ? 0 : 18,
      fontSize: isFocused ? 16 : 20,
      color: isFocused ? '#000' : '#555',
    },
    input: {
      paddingHorizontal: 5,
      fontSize: 20,
      borderBottomWidth: 2,
      borderBottomColor: isFocused ? 'blue' : 'black',
    },
  });
  return (
    <View style={styles.floatLabel}>
      <Text style={styles.label}>
        {isFocused ? "Let's discover!!" : 'Search your Favorite Tip'}
      </Text>
      <TextInput
        onChangeText={(text) => onChangeText(text)}
        value={value}
        style={styles.input}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};

export default FloatLabelInput;
