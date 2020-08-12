import React from 'react';
import { StyleSheet, View} from 'react-native';
import Login from './Login';
import SignUp from './SignUp';
import { SafeAreaView } from 'react-native-safe-area-context';


const AuthPage = () => {
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.login}>
        <Login />
      </View>
      <View style={styles.signup}>
        <SignUp />
      </View>
    </SafeAreaView>
  );
};

export default AuthPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'gold',
  },
  login: {
    display: 'flex',
  },
  signup: {
    display: 'none',
  },
});
