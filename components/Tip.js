import React, { useRef, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
} from 'react-native';
import TipFrontLeft from './TipCardComponents/TipFrontLeft';
import { TIP_HEIGHT } from '../styles/TipStyle';
import { borderRadius, shadow } from '../styles/MainStyles';
import { connect } from 'react-redux';

const Tip = ({
  title,
  description,
  hexCode,
  code_snippet,
  votes,
  by_username,
  more_info,
  user,
  y,
  index,
}) => {
  const containerColor = {
    backgroundColor: hexCode,
  };

  const TIP_CARD_HEIGHT = TIP_HEIGHT + 16 * 2;
  const translateY = Animated.add(
    y,
    y.interpolate({
      inputRange: [0, 0.00001 + index * TIP_CARD_HEIGHT],
      outputRange: [0, -index * TIP_CARD_HEIGHT],
      extrapolateRight: 'clamp',
    }),
  );
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [flipIndex, setFlipIndex] = useState(0);
  const animation = (toValue) =>
    Animated.timing(animatedValue, {
      toValue,
      duration: 1000,
      useNativeDriver: false,
    });

  const onPress = () => {
    setFlipIndex(flipIndex === 1 ? 0 : 1);
    animation(flipIndex === 1 ? 0 : 1).start();
  };

  const renderFrontCard = (
    <TouchableOpacity onPress={onPress}>
      <Text style={rightViewStyle.headerText}>{title} </Text>

      <View>
        <Text>Press to see the description</Text>
      </View>
      <View style={[rightViewStyle.right_side, rightViewStyle.codeSnippetBox]}>
        <Text style={rightViewStyle.codeSnippetText}>
          Code Snippet: {code_snippet}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderBackCard = (
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

  return (
    <Animated.View
      style={[
        mainViewStyles.tipBox,
        containerColor,
        { transform: [{ translateY }] },
      ]}
    >
      {
        <TipFrontLeft
          user={user}
          by_username={by_username}
          more_info={more_info}
          votes={votes}
        />
      }
      <Animated.View
        style={[
          rightViewStyle.right_side,
          {
            transform: [
              {
                perspective: 200,
              },
              {
                rotateY: animatedValue.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: ['0deg', '-90deg', '-180deg'],
                }),
              },
              {
                translateX: animatedValue.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: ['0%', '25%', '0%'],
                }),
              },
            ],
          },
        ]}
      >
        {flipIndex === 0 ? renderFrontCard : renderBackCard}
      </Animated.View>
    </Animated.View>
  );
};

const mainViewStyles = StyleSheet.create({
  tipBox: {
    ...shadow,
    ...borderRadius,
    flex: 1,
    aspectRatio: 1.5,
    paddingVertical: 10,
    paddingHorizontal: 8,
    paddingBottom: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

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
  codeSnippetBox: {
    ...borderRadius,
    backgroundColor: 'black',
    paddingBottom: 10,
    marginVertical: 15,
    height: 115,
  },
  codeSnippetText: {
    color: 'white',
    paddingBottom: 8,
  },
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

const mapStateToProps = ({ authStore }) => ({
  user: authStore.user,
});

export default connect(mapStateToProps)(Tip);
