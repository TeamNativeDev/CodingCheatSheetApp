export default (
  state = { isLogin: false, user: {}, jwt: '' },
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
    case 'NEW_TIP':
      return {
        ...state,
        user: {
          ...state.user,
          tips: [...state.user.tips, payload],
        },
      };
    case 'UPDATE_TIP':
      return {
        ...state,
        user: {
          ...state.user,
          tips: state.user.tips.map((tip) =>
            tip.id === payload.id ? payload : tip,
          ),
        },
      };
    default:
      return state;
  }
};
