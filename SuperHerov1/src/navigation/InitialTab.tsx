import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import Search from '../screens/Search';

import {Icon} from 'react-native-elements';

const Tab = createBottomTabNavigator();

export default function InitialTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => screenOptions(route, color),
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: '#646464',
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerTintColor: 'orange',
          headerTitleAlign: 'center',
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          title: 'Search',
          headerTintColor: 'orange',
          headerTitleAlign: 'center',
        }}
      />
    </Tab.Navigator>
  );
}

function screenOptions(route: String, color: String): JSX.Element {
  let iconName = '';

  switch (route.name) {
    case 'Home':
      iconName = 'home';
      break;
    case 'Search':
      iconName = 'search1';
      break;
    default:
      break;
  }
  return <Icon type="antdesign" name={iconName} size={22} color={color} />;
}
