export default (
  state = { isLogin: false, user: {}, tips: {}, jwt: '' },
  { type, payload },
) => {
  switch (type) {
    case 'LOGIN':
      return {
        ...state,
        isLogin: true,
        ...payload,
      };
    case 'LOGOUT':
      return { isLogin: false, user: {} };

    default:
      return state;
  }
};
