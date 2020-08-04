import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FloatLabelInput from './FloatLabelInput';
import AppButton from './AppButton';
import * as SecureStore from 'expo-secure-store';
const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = () => {
    SecureStore.setItemAsync('userId', 'id');
    navigation.navigate('Home', { login: true });
  };
  return (
    <SafeAreaView>
      <FloatLabelInput value={email} setValue={setEmail} mainLabel="Title" />
      <FloatLabelInput
        value={password}
        setValue={setPassword}
        mainLabel="Title"
      />
      <AppButton onPress={handleSubmit}>Login</AppButton>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
