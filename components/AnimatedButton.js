import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

const CIRCLE_SIZE = 75;
const AnimatedButton = ({ animatedValue, onPress }) => {
  const inputRange = [0, 0.001, 0.5, 0.501, 1];
  const containerBg = animatedValue.interpolate({
    inputRange,
    outputRange: ['gold', 'gold', 'gold', '#444', '#444'],
  });
  const styles = StyleSheet.create({
    circleButton: {
      height: CIRCLE_SIZE,
      width: CIRCLE_SIZE,
      borderRadius: CIRCLE_SIZE / 2,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
    circle: {
      width: CIRCLE_SIZE,
      height: CIRCLE_SIZE,
      borderRadius: CIRCLE_SIZE / 2,
      backgroundColor: '#444',
    },
    container: {
      margin: 10,
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.circle,
          {
            backgroundColor: containerBg,
            transform: [
              {
                perspective: 400,
              },
              {
                rotateY: animatedValue.interpolate({
                  //percentage on animation
                  inputRange: [0, 0.5, 1],
                  //the values for that time in animation
                  outputRange: ['0deg', '-90deg', '-180deg'],
                }),
              },
              {
                scale: animatedValue.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [1, 8, 1],
                }),
              },
              {
                translateX: animatedValue.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: ['0%', '50%', '0%'],
                }),
              },
            ],
          },
        ]}
      >
        <TouchableOpacity onPress={onPress}>
          <View style={[styles.circle, styles.circleButton]}>
            <AntDesign name="arrowright" size={28} color={'white'} />
          </View>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default AnimatedButton;
