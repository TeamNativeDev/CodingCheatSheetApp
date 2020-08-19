import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import FloatLabelInput from './FloatLabelInput';
import AppButton from './AppButton';
import { signUpUser } from '../actions/authActions';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { borderRadius, shadow } from '../styles/MainStyles';

const SignUp = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    props.signUpUser({
      user: { username: username, password, email },
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up</Text>
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

      <FloatLabelInput value={email} setValue={setEmail} mainLabel="Email" />

      <AppButton style={styles.button} onPress={handleSubmit}>
        Sign Up
      </AppButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...borderRadius,
    ...shadow,
    backgroundColor: '#318fb5',
    margin: 5,
    padding: 5,
    paddingVertical: 20,
  },
  button: {
    backgroundColor: '#b0cac7',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default connect(null, { signUpUser })(SignUp);
