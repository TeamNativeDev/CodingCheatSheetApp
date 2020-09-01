import React from 'react';
import { StyleSheet } from 'react-native';
import Profile from '../components/Profile';
import { connect } from 'react-redux';
import AuthPage from '../components/AuthPage';

const Auth = (props) => {
  const { isLogin } = props;
  return isLogin ? <Profile {...props} /> : <AuthPage />;
};

const mapStateToProps = ({ authStore }) => ({
  isLogin: authStore.isLogin,
});

export default connect(mapStateToProps)(Auth);

const styles = StyleSheet.create({});
