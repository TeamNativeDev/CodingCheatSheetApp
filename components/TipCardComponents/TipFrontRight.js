import React from 'react';
import { borderRadius } from '../../styles/MainStyles';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/styles/prism';
import { connect } from 'react-redux';

const TipFrontRight = ({
  category_id,
  onPress,
  code_snippet,
  title,
  categories,
}) => {
  // TODO console.log(categories, category_id);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={onPress}>
        <Text style={styles.headerText}>{title} </Text>
        <Text style>Press to see the description</Text>
      </TouchableOpacity>
      <View style={styles.right_side}>
        <SyntaxHighlighter
          style={tomorrow}
          customStyle={styles.highlighter}
          language="javascript"
          fontSize={12}
          highlighter="prism"
        >
          {code_snippet || 'nothing'}
        </SyntaxHighlighter>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: { alignSelf: 'center' },
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

const mapStateToProps = ({ categoriesStore }) => ({
  categories: categoriesStore.categories,
});

export default connect(mapStateToProps)(TipFrontRight);
