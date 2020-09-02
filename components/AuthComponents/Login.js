import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import { borderRadius, shadow } from '../../styles/MainStyles';
import FloatLabelInput from '../../helpers/FloatLabelInput';
import AppButton from '../../helpers/AppButton';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    props.loginUser({ user: { username: username.toLowerCase(), password } });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <FloatLabelInput
        value={username}
        setValue={setUsername}
        mainLabel="Username"
        theme="#f7d6bf"
      />
      <FloatLabelInput
        value={password}
        setValue={setPassword}
        mainLabel="Password"
        secureTextEntry={true}
        theme="#f7d6bf"
      />
      <AppButton style={styles.button} onPress={handleSubmit}>
        Login
      </AppButton>
    </View>
  );
};

export default connect(null, { loginUser })(Login);

const styles = StyleSheet.create({
  container: {
    ...borderRadius,
    ...shadow,
    backgroundColor: '#005086',
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
