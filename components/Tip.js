import React, { useRef, useState } from 'react';
import { StyleSheet, Animated, View, Dimensions } from 'react-native';
import TipFrontLeft from './TipCardComponents/TipFrontLeft';
import TipFrontRight from './TipCardComponents/TipFrontRight';
import TipBackRight from './TipCardComponents/TipBackRight';
import { borderRadius, shadow } from '../styles/MainStyles';
import { connect } from 'react-redux';

const { width, height } = Dimensions.get('window');

const Tip = (props) => {
  const containerColor = {
    backgroundColor: props.hexCode,
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
  const handlePress = () => {
    const { tip, route, navigation, color } = props;
    navigation.navigate('TipModal', { color, tip, ...route.params });
  };

  return (
    <View style={[mainViewStyles.tipBox, containerColor]}>
      {<TipFrontLeft {...props} onPress={handlePress} />}
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
            ],
          },
        ]}
      >
        {flipIndex === 0 ? (
          <TipFrontRight {...props.tip} onPress={onPress} />
        ) : (
          <TipBackRight {...props.tip} onPress={onPress} />
        )}
      </Animated.View>
    </View>
  );
};

const mainViewStyles = StyleSheet.create({
  tipBox: {
    ...shadow,
    ...borderRadius,
    flex: 1,
    height: height / 3,
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
    height: height / 3.2,
    width: width / 1.7,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'aliceblue',
  },
});

const mapStateToProps = ({ authStore }) => ({
  user: authStore.user,
  jwt: authStore.jwt,
});

export default connect(mapStateToProps)(Tip);
