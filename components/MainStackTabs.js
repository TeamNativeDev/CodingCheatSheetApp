import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Auth from '../screens/Auth';
import Home from '../screens/Home';
import Categories from '../screens/Categories';
import { Entypo } from '@expo/vector-icons';
import { connect } from 'react-redux';

const MainStackTabs = ({ categories }) => {
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
const mapStateToProps = ({ categoriesStore }) => ({
  categories: categoriesStore.categories,
});

export default connect(mapStateToProps)(MainStackTabs);
