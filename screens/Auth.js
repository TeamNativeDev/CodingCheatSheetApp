import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Login from '../components/Login';
import Profile from '../components/Profile';
import * as SecureStore from 'expo-secure-store';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user) {
      const configObject = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ user }),
      };
      fetch('http://localhost:3000/api/v1/login', configObject)
        .then((res) => res.json())
        .then((json) => SecureStore.setItemAsync('user', JSON.stringify(json)))
        .then(setIsLogin(true));
      // fetch(
      //   'https://flatiron-cheat-sheet.herokuapp.com/api/v1/login',
      //   configObject,
      // )
    }
  }, [user]);

  return isLogin ? <Profile /> : <Login setUser={setUser} />;
};

export default Auth;

const styles = StyleSheet.create({});
