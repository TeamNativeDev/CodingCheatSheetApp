import React from 'react';
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
    // <TouchableOpacity onPress={onPress}>
    <View>
      <View>
        <TouchableOpacity onPress={onPress}>
          <Text
            style={[rightViewStyle.headerText, rightViewStyle.transformContent]}
          >
            {title}
          </Text>

          <Text style={rightViewStyle.transformContent}>
            Press to see the Code Snippet
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <ScrollView
          style={[rightViewStyle.scroll, rightViewStyle.descriptionView]}
          scrollEnabled={true}
        >
          <Text
            style={[
              rightViewStyle.descriptionText,
              rightViewStyle.transformContent,
            ]}
          >
            Description: {description}
          </Text>
        </ScrollView>
      </View>
    </View>
    // </TouchableOpacity>
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
  descriptionText: {
    fontWeight: 'bold',
  },
  descriptionView: {
    ...borderRadius,
    paddingTop: 8,
    height: 115,
  },

  transformContent: { transform: [{ rotateY: '180deg' }] },

  scroll: {
    flexGrow: 1,
  },
});

export default TipBackRight;
