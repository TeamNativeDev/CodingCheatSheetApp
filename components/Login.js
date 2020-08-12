import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FloatLabelInput from './FloatLabelInput';
import AppButton from './AppButton';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authActions';
import { borderRadius, shadow } from '../styles/MainStyles';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    props.loginUser({ user: { username: username.toLowerCase(), password } });
  };
  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default connect(null, { loginUser })(Login);

const styles = StyleSheet.create({
  container: {
    ...borderRadius,
    ...shadow,
    backgroundColor: 'turquoise',
    margin: 5,
    padding: 5,
  },
});
