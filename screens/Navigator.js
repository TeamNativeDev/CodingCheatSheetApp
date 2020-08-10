import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tips from './Tips';
import { createStackNavigator } from '@react-navigation/stack';
import TipModal from './TipModal';
import AnimatedSplash from 'react-native-animated-splash-screen';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/categoriesActions';
import MainStackTabs from '../components/MainStackTabs';

const RootStack = createStackNavigator();

const Navigator = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    props.fetchCategories().then(() => {
      setIsLoaded(true);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={isLoaded}
      logoImage={require('../assets/logo.png')}
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

export default connect(null, { fetchCategories })(Navigator);
