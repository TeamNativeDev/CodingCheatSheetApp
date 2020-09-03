import React from 'react';
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
