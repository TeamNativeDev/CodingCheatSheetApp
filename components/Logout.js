import React, { useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';

const Logout = ({ logoutUser: logout, navigation }) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      logout();
    });
    setTimeout(() => {
      navigation.navigate('Home');
    }, 5000);
    return unsubscribe;
  }, []);
  return (
    <SafeAreaView>
      <Text>Thanks for use our App</Text>
    </SafeAreaView>
  );
};

export default connect(null, { logoutUser })(Logout);

const styles = StyleSheet.create({});
