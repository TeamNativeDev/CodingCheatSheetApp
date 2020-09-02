import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { GRADIENT } from '../styles/Pallete';
export default function Gradient() {
  return <LinearGradient colors={GRADIENT} style={styles.gradient} />;
}

const styles = StyleSheet.create({
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
  },
});
