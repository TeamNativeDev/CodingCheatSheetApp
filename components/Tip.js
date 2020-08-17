import React, { useRef, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Linking,
  Alert,
  Animated,
} from 'react-native';
import { borderRadius, shadow } from '../styles/MainStyles';
import { Entypo } from '@expo/vector-icons';
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

  const [tipVotes, setTipVotes] = useState(votes);

  const handleUpVote = (currentUser) => {
    if (user.id) {
      let vote = tipVotes.find((voteId) => voteId === currentUser.id);
      if (vote) {
        setTipVotes((prev) => prev.filter((userVote) => userVote !== vote));
      } else {
        setTipVotes((prev) => [...prev, currentUser.id]);
      }
    } else {
      Alert.alert('Only Logged In Users can vote');
    }
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

  return (
    <Animated.View
      style={[
        mainViewStyles.tipBox,
        containerColor,
        { transform: [{ translateY }] },
      ]}
    >
      <View style={leftViewStyle.left_side}>
        <View>
          <Text>By: {by_username}</Text>
        </View>

        <TouchableOpacity onPress={() => handleUpVote(user)}>
          <Text>
            <Entypo name="thumbs-up" size={30} color="black" />
            {tipVotes.length} Times
          </Text>
        </TouchableOpacity>

        <Text
          style={leftViewStyle.more_info}
          onPress={() => Linking.openURL(more_info)}
        >
          More Info
        </Text>
      </View>

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
        <TouchableOpacity onPress={onPress}>
          <Text style={rightViewStyle.headerText}>{title} </Text>

          <View>
            <Text>Click to see the description</Text>
          </View>
          <View
            style={[rightViewStyle.right_side, rightViewStyle.codeSnippetBox]}
          >
            <Text style={rightViewStyle.codeSnippetText}>
              Code Snippet: {code_snippet}
            </Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
};

const TIP_HEIGHT = 200;
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

const leftViewStyle = StyleSheet.create({
  more_info: {
    color: 'blue',
    paddingTop: 10,
  },
  left_side: {
    flex: 1,
    height: TIP_HEIGHT,
    width: 300,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 8,
    backgroundColor: 'lightgreen',
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
    marginVertical: 35,
    height: 115,
  },
  codeSnippetText: {
    color: 'white',
    paddingBottom: 8,
  },
});

const mapStateToProps = ({ authStore }) => ({
  user: authStore.user,
});

export default connect(mapStateToProps)(Tip);

// const oldStyles = StyleSheet.create({
//   tipBox: {
//     ...shadow,
//     flex: 1,
//     height: 250,
//     paddingVertical: 10,
//     paddingHorizontal: 5,
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   descriptionText: {
//     fontWeight: 'bold',
//   },
//   descriptionView: {
//     ...borderRadius,
//     paddingTop: 8,
//   },

//   scroll: {
//     flexGrow: 1,
//     backgroundColor: 'white',
//   },
//   codeSnippetBox: {
//     ...borderRadius,
//     backgroundColor: 'black',
//     padding: 10,
//   },
//   codeSnippetText: {
//     color: 'white',
//     paddingBottom: 8,
//   },
// });
