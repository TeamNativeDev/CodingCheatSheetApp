import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Auth from '../screens/Auth';
import Home from '../screens/Home';
import Categories from '../screens/Categories';
import { Entypo } from '@expo/vector-icons';
import { connect } from 'react-redux';
import Logout from './Logout';

const MainStackTabs = ({ isLogin }) => {
  const Tab = createBottomTabNavigator();

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
        component={Categories}
        options={{
          tabBarIcon: () => <Entypo name="list" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name={'Auth'}
        component={Auth}
        options={{
          tabBarLabel: isLogin ? 'Profile' : 'Login',
          tabBarIcon: () => (
            <Entypo name={isLogin ? 'user' : 'login'} size={24} color="black" />
          ),
        }}
      />
      {isLogin ? (
        <Tab.Screen
          name={'Logout'}
          component={Logout}
          options={{
            tabBarIcon: () => <Entypo name="log-out" size={24} color="black" />,
          }}
        />
      ) : null}
    </Tab.Navigator>
  );
};

const mapStateToProps = ({ authStore }) => ({
  isLogin: authStore.isLogin,
});

export default connect(mapStateToProps)(MainStackTabs);
