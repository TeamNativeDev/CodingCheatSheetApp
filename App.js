import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Categories from './screens/Categories';
import Tips from './screens/Tips';
import { createStackNavigator } from '@react-navigation/stack';
import TipModal from './screens/TipModal';
import AnimatedSplash from 'react-native-animated-splash-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Auth from './screens/Auth';
import { Entypo } from '@expo/vector-icons';
import BASEURL from './helpers/BaseUrl';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  undefined,
  composeEnhancers(applyMiddleware(thunk)),
);

const App = () => {
  const [categories, setCategories] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const MainStackTabs = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => <Entypo name="home" size={24} color="black" />,
          }}
        />
        <Tab.Screen
          name="Categories"
          initialParams={{ categories: categories }}
          component={Categories}
          options={{
            tabBarIcon: () => <Entypo name="list" size={24} color="black" />,
          }}
        />
        <Tab.Screen
          name={'Profile'}
          component={Auth}
          options={{
            tabBarIcon: () => <Entypo name="user" size={24} color="black" />,
          }}
        />
      </Tab.Navigator>
    );
  };
  useEffect(() => {
    fetch(BASEURL + 'categories')
      .then((resp) => resp.json())
      .then((data) => setCategories(data))
      .then(() => {
        setTimeout(() => {
          setIsLoaded(true);
        });
      }, 1000);
  }, []);

  return (
    <Provider store={store}>
      <AnimatedSplash
        translucent={true}
        isLoaded={isLoaded}
        logoImage={require('./assets/logo.png')}
        backgroundColor={'#fff'}
        logoHeight={300}
        logoWidth={300}
      >
        <NavigationContainer>
          <RootStack.Navigator mode="modal">
            <RootStack.Screen
              name="Main"
              component={MainStackTabs}
              options={{ headerShown: false }}
            />
            <RootStack.Screen
              name="Tips"
              component={Tips}
              options={({ route }) => ({ title: `${route.params.title} Tips` })}
            />
            <RootStack.Screen
              name="TipModal"
              component={TipModal}
              options={({ route }) => ({
                title: 'New Tip',
              })}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </AnimatedSplash>
    </Provider>
  );
};

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//   },
// });

export default App;
