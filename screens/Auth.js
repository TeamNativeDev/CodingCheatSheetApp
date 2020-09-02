import React from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Profile from '../components/AuthComponents/Profile';
import AuthPage from '../components/AuthComponents/AuthPage';

const Auth = (props) => {
  const { isLogin } = props;
  return isLogin ? <Profile {...props} /> : <AuthPage />;
};

const mapStateToProps = ({ authStore }) => ({
  isLogin: authStore.isLogin,
});

export default connect(mapStateToProps)(Auth);

const styles = StyleSheet.create({});
