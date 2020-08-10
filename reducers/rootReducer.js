import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  categoriesStore: categoriesReducer,
  authStore: authReducer,
});

export default rootReducer;
