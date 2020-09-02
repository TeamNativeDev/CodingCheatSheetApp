import BASEURL from '../helpers/BaseUrl';
import { Alert } from 'react-native';

export const EditTip = (tip, jwt, type = '') => {
  return (dispatch) => {
    const configurationObject = {
      method: 'Patch',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify({ type, tip }),
    };
    fetch(BASEURL + `tips/${tip.id}`, configurationObject);
  };
};

export const CreateOrUpdateTip = (props, tipObject) => {
  return (dispatch) => {
    const { route, navigation, jwt } = props;
    const { tip } = route.params;

    const configObject = {
      method: tip ? 'PATCH' : 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify({
        tip: tipObject,
      }),
    };
    const url = BASEURL + (tip ? `tips/${tip.id}` : 'tips');
    fetch(url, configObject)
      .then((data) => data.json())
      .then((json) => {
        if (json.error) {
          Alert.alert(json.message);
        } else {
          if (tip) {
            props.UpdateUserTips(json.data);
            navigation.navigate('Auth');
          } else {
            props.newTip(json.data);

            navigation.navigate('Tips', { data: json.data, ...route.params });
          }
        }
      });
  };
};

export const UpdateUserTips = (payload) => {
  return {
    type: 'UPDATE_TIP',
    payload,
  };
};
