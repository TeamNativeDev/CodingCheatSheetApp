import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FloatLabelInput from './FloatLabelInput';
import AppButton from './AppButton';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authActions';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    props.loginUser({ user: { username: username.toLowerCase(), password } });
  };
  return (
    <SafeAreaView>
      <FloatLabelInput
        value={username}
        setValue={setUsername}
        mainLabel="Username"
      />
      <FloatLabelInput
        value={password}
        setValue={setPassword}
        mainLabel="Password"
        secureTextEntry={true}
      />
      <AppButton onPress={handleSubmit}>Login</AppButton>
    </SafeAreaView>
  );
};

export default connect(null, { loginUser })(Login);

const styles = StyleSheet.create({});
