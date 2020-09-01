import React from 'react';
import { borderRadius } from '../../styles/MainStyles';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/styles/prism';

const TipFrontRight = ({ onPress, code_snippet, title }) => {
  return (
    <View style={{ alignSelf: 'center' }}>
      <View>
        <TouchableOpacity onPress={onPress}>
          <Text style={rightViewStyle.headerText}>{title} </Text>

          <Text style>Press to see the description</Text>
        </TouchableOpacity>
      </View>
      <View style={rightViewStyle.right_side}>
        <SyntaxHighlighter
          style={tomorrow}
          customStyle={rightViewStyle.highlighter}
          language="javascript"
          fontSize={12}
          highlighter="prism"
        >
          {code_snippet}
        </SyntaxHighlighter>
      </View>
    </View>
  );
};

const rightViewStyle = StyleSheet.create({
  highlighter: {
    ...borderRadius,
    padding: 5,
    margin: 5,
  },
  right_side: {
    height: 190,
    width: 215,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'aliceblue',
  },
  headerText: {
    textAlignVertical: 'top',
    fontWeight: 'bold',
    fontSize: 16,
    paddingBottom: 8,
    textDecorationLine: 'underline',
  },
  codeSnippetText: {
    color: 'white',
    paddingBottom: 8,
  },
});

export default TipFrontRight;
