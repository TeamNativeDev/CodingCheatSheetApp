import React, { useRef, useState } from 'react';
import { StyleSheet, Animated, Dimensions } from 'react-native';
import TipFrontLeft from './TipCardComponents/TipFrontLeft';
import TipFrontRight from './TipCardComponents/TipFrontRight';
import TipBackRight from './TipCardComponents/TipBackRight';
import { TIP_HEIGHT } from '../styles/TipStyle';
import { borderRadius, shadow } from '../styles/MainStyles';
import { connect } from 'react-redux';

// interface TipProps {
//   y: Animated.Value;
//   index: number;
//   title: string;
//   description: string;
//   hexCode: string;
//   code_snippet: string;
//   votes: [];
//   by_username: string;
//   more_info: string;
//   user: {};
// }

const Tip = ({
  title,
  description,
  hexCode,
  code_snippet,
  votes,
  by_username,
  more_info,
  user,
}) => {
  const containerColor = {
    backgroundColor: hexCode,
  };

  const animatedValue = useRef(new Animated.Value(0)).current;
  const [flipIndex, setFlipIndex] = useState(0);
  const animation = (toValue) =>
    Animated.timing(animatedValue, {
      toValue,
      duration: 1000,
      useNativeDriver: false,
    });

  const onPress = () => {
    setTimeout(() => {
      setFlipIndex(flipIndex === 1 ? 0 : 1);
    }, 500);
    animation(flipIndex === 1 ? 0 : 1).start();
  };

  return (
    <Animated.View style={[mainViewStyles.tipBox, containerColor]}>
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
        {flipIndex === 0 ? (
          <TipFrontRight
            title={title}
            onPress={onPress}
            code_snippet={code_snippet}
          />
        ) : (
          <TipBackRight
            title={title}
            description={description}
            onPress={onPress}
          />
        )}
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
});

const mapStateToProps = ({ authStore }) => ({
  user: authStore.user,
});

export default connect(mapStateToProps)(Tip);
