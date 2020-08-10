import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as SecureStore from 'expo-secure-store';
import FloatLabelInput from './FloatLabelInput';
import AppButton from './AppButton';
import { logoutUser } from '../actions/authActions';
import { connect } from 'react-redux';

const Profile = (props) => {
  const [username, setUsername] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {}, []);

  const logout = () => {
    props.logoutUser();
  };

  return (
    <SafeAreaView>
      <Text>User Profile</Text>
      <AppButton onPress={logout}>Logout </AppButton>
      <FloatLabelInput
        value={username}
        setValue={setUsername}
        // Bug on label and on not editable
        mainLabel="Username"
        autoFocus={true}
      />
      <FloatLabelInput
        value={userEmail}
        setValue={setUserEmail}
        mainLabel="Your Email"
        autoFocus={true}
      />
      <FloatLabelInput
        value={bio}
        setValue={setBio}
        mainLabel="Write something about you"
        multiline={true}
        numberOfLines={3}
        autoFocus={true}
      />
    </SafeAreaView>
  );
};

export default connect(null, { logoutUser })(Profile);

const styles = StyleSheet.create({
  edit: {
    backgroundColor: 'gold',
    width: 100,
    padding: 5,
  },
});
