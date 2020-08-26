import BASEURL from '../helpers/BaseUrl';

export const EditTip = (tip, jwt) => {
  return (dispatch) => {
    const configurationObject = {
      method: 'Patch',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify(tip),
    };
    fetch(BASEURL + `tips/${tip.id}`, configurationObject);
  };
};
