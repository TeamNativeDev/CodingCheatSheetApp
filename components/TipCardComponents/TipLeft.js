import React, { useState, useEffect } from 'react';
import { Entypo } from '@expo/vector-icons';
import { EditTip } from '../../actions/tipAction';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Linking,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import AppButton from '../AppButton';

const { width, height } = Dimensions.get('window');
const TipFrontLeft = (props) => {
  const { user, tip, jwt, onPress } = props;
  const { by_username, more_info, votes } = tip;

  const [tipVotes, setTipVotes] = useState(votes);
  const [firstRender, setFirstRender] = useState(false);

  const styles = StyleSheet.create({
    more_info: {
      color: 'blue',
      paddingTop: 10,
      textAlign: 'center',
    },
    left_side: {
      flex: 1,
      height: height / 3.2,
      width: width,
      flexDirection: 'column',
      justifyContent: 'space-around',
      paddingLeft: 8,
      backgroundColor: props.color || 'lightgreen',
    },
    editButton: {
      backgroundColor: 'yellow',
      paddingHorizontal: 5,
      paddingVertical: 10,
    },
  });

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

  useEffect(() => {
    if (firstRender) {
      tip.votes = tipVotes;
      props.EditTip(tip, jwt, 'updateVote');
    } else {
      setFirstRender(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tipVotes]);

  return (
    <View style={styles.left_side}>
      <View style={{ alignItems: 'center' }}>
        <Text>Tip By:</Text>
        <Text> {by_username}</Text>
      </View>

      <TouchableOpacity onPress={() => handleUpVote(user)}>
        <Text>
          <Entypo name="thumbs-up" size={30} color="black" />
          {tipVotes.length} Times
        </Text>
      </TouchableOpacity>

      {more_info ? (
        <Text
          style={styles.more_info}
          onPress={() => Linking.openURL(more_info)}
        >
          More Info
        </Text>
      ) : null}
      {props.route ? (
        <AppButton onPress={onPress} style={styles.editButton}>
          Edit
        </AppButton>
      ) : null}
    </View>
  );
};

export default connect(null, { EditTip })(TipFrontLeft);
