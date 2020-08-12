import React, { useRef, useState } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import Login from './Login';
import SignUp from './SignUp';
import { SafeAreaView } from 'react-native-safe-area-context';
import AnimatedButton from './AnimatedButton';

const AuthPage = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(0);
  const [flip, setFlip] = useState(false);
  const inputRange = [0, 0.001, 0.5, 0.501, 1];
  const containerBg = animatedValue.interpolate({
    inputRange,
    outputRange: ['#444', '#444', '#444', 'gold', 'gold'],
  });
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
    container: {
      flex: 1,
      alignContent: 'center',
      justifyContent: 'center',
      backgroundColor: 'gold',
    },
    login: {
      display: flip ? 'none' : 'flex',
    },
    signup: {
      display: flip ? 'flex' : 'none',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.login}>
        <Login />
      </View>
      <AnimatedButton onPress={handlePress} animatedValue={animatedValue} />
      <View style={styles.signup}>
        <SignUp />
      </View>
    </SafeAreaView>
  );
};

export default AuthPage;
