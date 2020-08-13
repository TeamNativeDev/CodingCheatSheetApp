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
    <View style={[styles.tipBox, containerColor]}>
      <Text style={styles.headerText}>{title} </Text>

      <View style={styles.codeSnippetBox}>
        <Text style={styles.codeSnippetText}>Code Snippet: {code_snippet}</Text>
      </View>

      <ScrollView style={styles.scroll} scrollEnabled={true}>
        <View style={styles.descriptionView}>
          <Text style={styles.descriptionText}>Description: {description}</Text>
        </View>
      </ScrollView>
      {/* <View>
        <Text>By {by_username}</Text>
      </View> */}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Text
          style={styles.more_info}
          onPress={() => Linking.openURL(more_info)}
        >
          More Info
        </Text>
        <TouchableOpacity onPress={() => handleUpVote(user)}>
          <Text>
            <Entypo name="thumbs-up" size={24} color="black" />
            {tipVotes.length} Times
          </Text>
        </TouchableOpacity>

        <View>
          <Text>By {by_username}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tipBox: {
    ...shadow,
    flex: 1,
    height: 250,
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  descriptionText: {
    fontWeight: 'bold',
  },
  descriptionView: {
    ...borderRadius,
    paddingTop: 8,
  },
  headerText: {
    textAlignVertical: 'top',
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 8,
    textDecorationLine: 'underline',
  },
  scroll: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  codeSnippetBox: {
    ...borderRadius,
    backgroundColor: 'black',
    padding: 10,
  },
  codeSnippetText: {
    color: 'white',
    paddingBottom: 8,
  },
  more_info: {
    color: 'blue',
    paddingTop: 10,
  },
});

const mapStateToProps = ({ authStore }) => ({
  user: authStore.user,
});

export default connect(mapStateToProps)(Tip);
