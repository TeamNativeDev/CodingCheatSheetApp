export default (state = { isLogin: false }, { type }) => {
  switch (type) {
    case 'LOGIN':
      return { isLogin: true };
    case 'LOGOUT':
      return { isLogin: false };

    default:
      return state;
  }
};
