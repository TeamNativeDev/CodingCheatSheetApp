import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Categories from './screens/Categories';
import Tips from './screens/Tips';
import { createStackNavigator } from '@react-navigation/stack';
import TipModal from './screens/TipModal';
import AnimatedSplash from 'react-native-animated-splash-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const RootStack = createStackNavigator();
// const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();

// const MainStackScreen = () => {
//   return (
//     <MainStack.Navigator>
//       <MainStack.Screen name="Home" component={Home} />
//       <MainStack.Screen name="Categories" component={Categories} />
//       <MainStack.Screen
//         name="Tips"
//         component={Tips}
//         options={({ route }) => ({ title: `${route.params.title} Tips` })}
//       />
//     </MainStack.Navigator>
//   );
// };

const MainStackTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Categories" component={Categories} />
    </Tab.Navigator>
  );
};

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
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
            name="NewTip"
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
