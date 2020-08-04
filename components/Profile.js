import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as SecureStore from 'expo-secure-store';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUSer() {
      const userData = await SecureStore.getItemAsync('user');
      const userObject = await JSON.parse(userData);
      setUser(userObject.user);
    }

    getUSer();
  }, []);

  return (
    <SafeAreaView>
      <Text>User Profile</Text>
      <Text>{user?.username}</Text>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
