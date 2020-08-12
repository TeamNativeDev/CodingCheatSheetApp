import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
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

  console.log(props);
  const handleSubmit = () => {
    props.signUpUser({
      user: { username: username, password, email },
    });
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

      <FloatLabelInput value={email} setValue={setEmail} mainLabel="Email" />

      <AppButton onPress={handleSubmit}>Sign Up</AppButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...borderRadius,
    ...shadow,
    backgroundColor: 'turquoise',
    margin: 5,
    padding: 5,
  },
});

export default connect(null, { signUpUser })(SignUp);
