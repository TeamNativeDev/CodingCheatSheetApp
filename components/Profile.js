import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FloatLabelInput from './FloatLabelInput';
import { connect } from 'react-redux';
import Tip from './Tip';

const Profile = (props) => {
  const [username, setUsername] = useState(props.user.username);
  const [userEmail, setUserEmail] = useState(props.user.email);
  const [bio, setBio] = useState(props.user.bio);

  return (
    <SafeAreaView>
      <Text>User Profile</Text>
      <FloatLabelInput
        value={username}
        setValue={setUsername}
        // Bug on label and on not editable
        mainLabel="Username"
        autoFocus={false}
      />
      <FloatLabelInput
        value={userEmail}
        setValue={setUserEmail}
        mainLabel="Your Email"
        autoFocus={false}
      />
      <FloatLabelInput
        value={bio}
        setValue={setBio}
        mainLabel="Write something about you"
        multiline={true}
        numberOfLines={3}
        autoFocus={false}
      />

      <View>
        <Text>My Tips</Text>
      </View>

      {/* <FlatList
        data={props.tips}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Tip tip={item} />}
      /> */}
    </SafeAreaView>
  );
};
const mapStateToProps = ({ authStore }) => ({
  user: authStore.user,
  jwt: authStore.jwt,
  tips: authStore.tips,
});

export default connect(mapStateToProps)(Profile);

const styles = StyleSheet.create({
  edit: {
    backgroundColor: 'gold',
    width: 100,
    padding: 5,
  },
});
