import React from 'react';
// import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Categories from './screens/Categories';
import Tips from './screens/Tips';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <SafeAreaView style={styles.safeArea}> */}
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Tips" component={Tips} />
      </Stack.Navigator>
      {/* </SafeAreaView> */}
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//   },
// });

export default App;
