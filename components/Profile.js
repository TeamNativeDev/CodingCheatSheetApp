import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as SecureStore from 'expo-secure-store';
import FloatLabelInput from './FloatLabelInput';
import AppButton from './AppButton';

const Profile = () => {
  const [username, setUsername] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    async function getUSer() {
      const userData = await SecureStore.getItemAsync('user');
      const userObject = await JSON.parse(userData);
      setUserEmail(userObject.user.email);
      setUsername(userObject.user.username);
      setBio(userObject.user.bio);
    }

    getUSer();
  }, []);

  return (
    <SafeAreaView>
      <Text>User Profile</Text>
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

export default Profile;

const styles = StyleSheet.create({
  edit: {
    backgroundColor: 'gold',
    width: 100,
    padding: 5,
  },
});
