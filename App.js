import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, SafeAreaView } from 'react-native';
import Home from './screens/Home';
import Categories from './screens/Categories';
import Tips from './screens/Tips';
import { createStackNavigator } from '@react-navigation/stack';
import TipModal from './screens/TipModal';
import AnimatedSplash from 'react-native-animated-splash-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [categories, setCategories] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const MainStackTabs = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen
          name="Categories"
          initialParams={{ categories: categories }}
          component={Categories}
        />
        <Tab.Screen name={'Profile'} component={Auth} />
      </Tab.Navigator>
    );
  };
  useEffect(() => {
    fetch('https://flatiron-cheat-sheet.herokuapp.com/api/v1/categories')
      // fetch('http://localhost:3000/api/v1/categories')
      .then((resp) => resp.json())
      .then((data) => setCategories(data))
      .then(() => {
        setTimeout(() => {
          setIsLoaded(true);
        });
      }, 1000);
  }, []);

  return (
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
  );
};

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//   },
// });

export default App;
