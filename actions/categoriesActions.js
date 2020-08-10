import BASEURL from '../helpers/BaseUrl';

export const fetchCategories = () => {
  return async (dispatch) => {
    const res = await fetch(BASEURL + 'categories');
    const json = await res.json();
    if (json.error) {
      console.warn(json.error + ' ' + json.message);
    }
    dispatch({
      type: 'FETCH_CATEGORIES',
      payload: json,
    });
  };
};
