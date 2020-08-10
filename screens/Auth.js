import React from 'react';
import { StyleSheet } from 'react-native';
import Login from '../components/Login';
import Profile from '../components/Profile';

import { connect } from 'react-redux';

const Auth = ({ isLogin }) => {
  return isLogin ? <Profile /> : <Login />;
};

const mapStateToProps = ({ authStore }) => ({
  isLogin: authStore.isLogin,
});

export default connect(mapStateToProps)(Auth);

const styles = StyleSheet.create({});
