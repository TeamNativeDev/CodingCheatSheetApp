import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Login from '../components/Login';
import Profile from '../components/Profile';
import * as SecureStore from 'expo-secure-store';
import BASEURL from '../helpers/BaseUrl';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUSer() {
      const userData = await SecureStore.getItemAsync('user');
      console.log(userData);
      if (userData) {
        setIsLogin(true);
      }
    }
    getUSer();
    if (user) {
      const configObject = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ user }),
      };
      fetch(BASEURL + 'login', configObject)
        .then((res) => res.json())
        .then((json) => SecureStore.setItemAsync('user', JSON.stringify(json)))
        .then(setIsLogin(true));
    }
  }, [user]);

  return isLogin ? <Profile /> : <Login setUser={setUser} />;
};

export default Auth;

const styles = StyleSheet.create({});
