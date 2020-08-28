import React, { useRef, useState } from 'react';
import { StyleSheet, View, Animated, TouchableOpacity } from 'react-native';
import { borderRadius } from '../../styles/MainStyles';
import BackCard from './BackCard';

const MemberCard = (props) => {
  const { name } = props;
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(0);
  const [flip, setFlip] = useState(false);

  const animation = (toValue) =>
    Animated.timing(animatedValue, {
      toValue,
      duration: 3000,
      useNativeDriver: false,
    });

  const handlePress = () => {
    setIndex((prev) => (prev === 1 ? 0 : 1));
    animation(index === 1 ? 0 : 1).start();
    setTimeout(() => {
      setFlip((prev) => !prev);
    }, 1500);
  };

  const styles = StyleSheet.create({
    card: {
      ...borderRadius,
      backgroundColor: '#cdcdcd',
      width: 150,
      height: 75,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      margin: 10,
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
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
            transform: [
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
                  outputRange: [1, 2, 1],
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
        <TouchableOpacity onPress={handlePress}>
          <View style={[styles.card]}>
            {!flip ? (
              <Animated.Text style={styles.text}>{name}</Animated.Text>
            ) : (
              <BackCard {...props} />
            )}
          </View>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default MemberCard;
