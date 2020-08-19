import React from 'react';
import { Provider } from 'react-redux';
import Navigator from './screens/Navigator';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  undefined,
  composeEnhancers(applyMiddleware(thunk)),
);
export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
