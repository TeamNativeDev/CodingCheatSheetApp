import React, { useState } from 'react';
// import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FloatLabelInput from './FloatLabelInput';
import AppButton from './AppButton';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log(username, password, email);
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

export default SignUp;
