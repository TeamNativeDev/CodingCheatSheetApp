import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import { borderRadius, shadow } from '../styles/MainStyles';
import { Entypo } from '@expo/vector-icons';

const Tip = ({
  title,
  description,
  hexCode,
  code_snippet,
  votes,
  by_username,
  more_info,
}) => {
  const containerColor = {
    backgroundColor: hexCode,
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
        <Text>
          <Entypo name="thumbs-up" size={24} color="black" />
          {votes.length} Times
        </Text>
        <TouchableOpacity onPress={() => console.warn('pressed')} />
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

export default Tip;
