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
  const contentTransform = { transform: [{ rotateY: '180deg' }] };
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text style={[rightViewStyle.headerText, contentTransform]}>
          {title}{' '}
        </Text>

        <View>
          <Text style={contentTransform}>Press to see the Code Snippet</Text>
        </View>
        <ScrollView style={rightViewStyle.scroll} scrollEnabled={true}>
          <View style={rightViewStyle.descriptionView}>
            <Text style={[rightViewStyle.descriptionText, contentTransform]}>
              Description: {description}
            </Text>
          </View>
        </ScrollView>
      </View>
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
  descriptionText: {
    fontWeight: 'bold',
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
