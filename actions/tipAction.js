import BASEURL from '../helpers/BaseUrl';

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
