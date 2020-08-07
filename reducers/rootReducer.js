import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';

const rootReducer = combineReducers({
  categoriesStore: categoriesReducer,
});

export default rootReducer;
