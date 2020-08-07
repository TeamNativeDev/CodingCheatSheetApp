import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Categories from './Categories';
import Tips from './Tips';
import { createStackNavigator } from '@react-navigation/stack';
import TipModal from './TipModal';
import AnimatedSplash from 'react-native-animated-splash-screen';
import Auth from './Auth';
import { Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/categoriesActions';

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Navigator = (props) => {
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
          initialParams={{ categories }}
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
    props
      .fetchCategories()
      .then(() => {
        console.log(props.categories);
        setCategories(props.categories);
      })
      .then(setIsLoaded(true));
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

const mapStateToProps = ({ categoriesStore }) => ({
  categories: categoriesStore.categories,
});

const mapDispatchToProps = { fetchCategories };

export default connect(mapStateToProps, mapDispatchToProps)(Navigator);
