export default function categoriesReducer(
  state = {
    categories: [],
  },
  { type, payload },
) {
  switch (type) {
    case 'FETCH_CATEGORIES':
      return {
        ...state,
        categories: payload,
      };
    default:
      return { ...state };
  }
}
