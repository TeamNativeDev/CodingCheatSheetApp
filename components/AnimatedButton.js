import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

const CIRCLE_SIZE = 100;
const AnimatedButton = ({ animatedValue, onPress, flipped }) => {
  const inputRange = [0, 0.001, 0.5, 0.501, 1];
  const containerBg = animatedValue.interpolate({
    inputRange,
    outputRange: ['#005086', '#005086', '#005086', '#318fb5', '#318fb5'],
  });
  const styles = StyleSheet.create({
    circleButton: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
    circle: {
      width: CIRCLE_SIZE,
      height: CIRCLE_SIZE,
      borderRadius: CIRCLE_SIZE / 4,
      backgroundColor: '#318fb5',
    },
    container: {
      margin: 10,
      alignItems: 'center',
    },
    text: {
      color: '#f7d6bf',
      fontSize: 20,
      fontWeight: '900',
      transform: [
        {
          rotateY: animatedValue.interpolate({
            //percentage on animation
            inputRange: [0, 0.5, 1],
            //the values for that time in animation
            outputRange: ['0deg', '-90deg', '-180deg'],
          }),
        },
      ],
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
                  outputRange: [0, 5, 0],
                }),
              },
            ],
          },
        ]}
      >
        <TouchableOpacity onPress={onPress}>
          <View style={[styles.circle, styles.circleButton]}>
            <Animated.Text style={styles.text}>
              {flipped ? 'Login' : 'Signup'}
            </Animated.Text>
            <AntDesign name="arrowright" size={28} color={'#f7d6bf'} />
          </View>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default AnimatedButton;
