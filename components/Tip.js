import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Linking,
  Alert,
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

  return (
    <View style={[mainViewStyles.tipBox, containerColor]}>
      <View style={rightViewStyle.right_side}>
        <Text style={rightViewStyle.headerText}>{title} </Text>

        <View
          style={[rightViewStyle.right_side, rightViewStyle.codeSnippetBox]}
        >
          <Text style={rightViewStyle.codeSnippetText}>
            Code Snippet: {code_snippet}
          </Text>
        </View>
      </View>
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
    </View>
  );
};
const mainViewStyles = StyleSheet.create({
  tipBox: {
    ...shadow,
    flex: 1,
    aspectRatio: 1.5,
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginBottom: 10,
  },
});

const leftViewStyle = StyleSheet.create({
  more_info: {
    color: 'blue',
    paddingTop: 10,
  },
  left_side: {
    flex: 1,
    width: 105,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 8,
    borderRightWidth: 1,
    backgroundColor: 'antiquewhite',
  },
});

const rightViewStyle = StyleSheet.create({
  right_side: {
    flexDirection: 'column-reverse',
    left: 30,
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
    padding: 10,
    position: 'absolute',
    alignSelf: 'auto',
    marginHorizontal: 60,
    marginVertical: -100,
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
