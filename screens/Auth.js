import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from '../components/Login';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});
  return isLogin ? <Profile /> : <Login />;
};

export default Auth;

const styles = StyleSheet.create({});
