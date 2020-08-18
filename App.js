import React from 'react';
import { Provider } from 'react-redux';
import Navigator from './screens/Navigator';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { LinearGradient } from 'expo-linear-gradient';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  undefined,
  composeEnhancers(applyMiddleware(thunk)),
);
export default function App() {
  return (
    <Provider store={store}>
      <LinearGradient colors={['#fdbb2d', '#22c1c3']} style={styles.gradient} />
      <Navigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  base: {
    ...shadow,
    ...borderRadius,
    backgroundColor: WHITE,
  },
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: WHITE,
    flex: 1,
  },
  logo: {
    marginVertical: 30,
  },
  textContainer: {
    width: '90%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
  },
  descriptionContainer: {
    ...shadow,
    ...borderRadius,
    backgroundColor: WHITE,
    width: '90%',
    height: '20%',
  },
  byContainer: {
    width: '90%',
    padding: 15,
    alignItems: 'center',
  },
  byText: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  member: {
    ...absoluteCenter,
    height: 75,
    width: 150,
  },
  link: {
    color: '#00aaff',
    textDecorationLine: 'underline',
    fontSize: 28,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
});
