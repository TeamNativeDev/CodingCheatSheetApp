import React, { useState, useEffect } from 'react';
import { EditTip } from '../../actions/tipAction';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Linking,
  Dimensions,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import AppButton from '../../helpers/AppButton';
import { absoluteCenter } from '../../styles/MainStyles';

const { width, height } = Dimensions.get('window');
const TipFrontLeft = (props) => {
  const { user, tip, jwt, onPress } = props;
  const { by_username, more_info, votes } = tip;

  const [tipVotes, setTipVotes] = useState(votes);
  const [firstRender, setFirstRender] = useState(false);
  const vote = tipVotes.find((voteId) => voteId === user.id);

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
      backgroundColor: props.color || '#586F7C',
    },
    editButton: {
      backgroundColor: 'yellow',
      paddingHorizontal: 5,
      paddingVertical: 10,
    },
    text: {
      fontSize: 16,
      color: 'white',
      paddingVertical: 5,
    },
    bold: {
      fontWeight: 'bold',
    },
    italic: {
      fontStyle: 'italic',
    },
    like: {
      width: 75,
      height: 75,
    },
  });

  const handleUpVote = () => {
    if (user.id) {
      if (vote) {
        setTipVotes((prev) => prev.filter((userVote) => userVote !== vote));
      } else {
        setTipVotes((prev) => [...prev, user.id]);
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
      <View style={absoluteCenter}>
        <Text style={[styles.text, styles.bold]}>Tip By</Text>
        <Text style={styles.text}> {by_username}</Text>
      </View>

      <TouchableOpacity style={absoluteCenter} onPress={() => handleUpVote()}>
        {vote ? (
          <Image
            style={styles.like}
            source={require('../../assets/liked.png')}
          />
        ) : (
          <Image
            style={styles.like}
            source={require('../../assets/like.png')}
          />
        )}
        <Text style={[styles.text, styles.italic]}>
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
