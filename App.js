import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Categories from './screens/Categories';
import Tips from './screens/Tips';
import { createStackNavigator } from '@react-navigation/stack';
import TipModal from './screens/TipModal';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="Categories" component={Categories} />
      <MainStack.Screen
        name="Tips"
        component={Tips}
        options={({ route }) => ({ title: `${route.params.title} Tips` })}
      />
    </MainStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />

        <RootStack.Screen name="TipModal" component={TipModal} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//   },
// });

export default App;
