import React, { useRef, useState } from 'react';
import { TIP_HEIGHT } from '../../styles/TipStyle';
import { borderRadius } from '../../styles/MainStyles';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const TipBackRight = ({ title, description, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text
        style={[
          rightViewStyle.headerText,
          { transform: [{ rotateY: '180deg' }] },
        ]}
      >
        {title}{' '}
      </Text>

      <View>
        <Text style={{ transform: [{ rotateY: '180deg' }] }}>
          Press to see the Code Snippet
        </Text>
      </View>
      <ScrollView style={rightViewStyle.scroll} scrollEnabled={true}>
        <View style={rightViewStyle.descriptionView}>
          <Text style={rightViewStyle.descriptionText}>
            Description: {description}
          </Text>
        </View>
      </ScrollView>
    </TouchableOpacity>
  );
};

const rightViewStyle = StyleSheet.create({
  right_side: {
    height: TIP_HEIGHT,
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
    alignSelf: 'center',
  },
  // codeSnippetBox: {
  //   ...borderRadius,
  //   backgroundColor: 'black',
  //   paddingBottom: 10,
  //   marginVertical: 15,
  //   height: 115,
  // },
  // codeSnippetText: {
  //   color: 'white',
  //   paddingBottom: 8,
  // },
  descriptionText: {
    fontWeight: 'bold',
    transform: [{ rotateY: '180deg' }],
  },
  descriptionView: {
    ...borderRadius,
    paddingTop: 8,
    height: 115,
  },

  scroll: {
    flexGrow: 1,
  },
});

export default TipBackRight;
