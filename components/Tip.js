import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { borderRadius } from '../styles/MainStyles';

const Tip = ({ title, description, hexCode, code_snippet, votes }) => {
  const containerColor = {
    backgroundColor: hexCode,
  };
  // console.warn(hexCode);
  return (
    <View style={[styles.tipBox, containerColor]}>
      <Text style={styles.boxText}>{title} </Text>
      <Text style={styles.boxText}>{description} </Text>
      <View style={styles.codeSnippetBox}>
        <Text style={styles.codeSnippetText}>{code_snippet}</Text>
      </View>
      <View>
        <Text> Up Voted {votes.length} Times</Text>
        <TouchableOpacity
          onPress={() => console.warn('pressed')}
        ></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tipBox: {
    // backgroundColor: 'bisque',
    paddingVertical: 10,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  boxText: {
    fontWeight: 'bold',
  },
  codeSnippetBox: {
    ...borderRadius,
    backgroundColor: 'black',
    padding: 10,
  },
  codeSnippetText: {
    color: 'white',
  },
});

export default Tip;
