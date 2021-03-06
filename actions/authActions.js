import BASEURL from '../helpers/BaseUrl';
import { Alert } from 'react-native';

export const loginUser = (user) => {
  const configurationObject = {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(user),
  };
  return async (dispatch) => {
    const res = await fetch(BASEURL + 'login', configurationObject);
    const json = await res.json();
    if (json.error) {
      // implement and alert or something here

      Alert.alert(json.error + ' ' + json.message);
    } else {
      dispatch({
        type: 'LOGIN',
        payload: { user: json.user, jwt: json.jwt, tips: json.tips },
      });
    }
  };
};

export const logoutUser = () => ({
  type: 'LOGOUT',
});

export const signUpUser = (newUser) => {
  const configurationObject = {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(newUser),
  };
  return async (dispatch) => {
    const res = await fetch(BASEURL + 'sign_up', configurationObject);
    const json = await res.json();
    if (json.error) {
      // implement and alert or something here

      Alert.alert(json.error + ' ' + json.message);
    } else {
      dispatch({
        type: 'LOGIN',
        payload: { user: json.user, jwt: json.jwt },
      });
    }
  };
};

export const newTip = (tip) => {
  return { type: 'NEW_TIP', payload: tip };
};
