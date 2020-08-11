import React, { useState } from 'react';
// import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FloatLabelInput from './FloatLabelInput';
import AppButton from './AppButton';
import { signUpUser } from '../actions/authActions';
import { connect } from 'react-redux';

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

      <FloatLabelInput value={email} setValue={setEmail} mainLabel="Email" />

      <AppButton onPress={handleSubmit}>Sign Up</AppButton>
    </SafeAreaView>
  );
};

export default connect(null, { signUpUser })(SignUp);
