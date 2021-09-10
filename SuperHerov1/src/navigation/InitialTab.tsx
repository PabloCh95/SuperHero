import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import Search from '../screens/Search';

import {Icon} from 'react-native-elements';

import {Route} from '../utils/interface';

const Tab = createBottomTabNavigator();

export default function InitialTab(): JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => screenOptions(route, color),
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: '#646464',
      })}>
      <Tab.Screen
        name="Team"
        component={HomeScreen}
        options={{
          title: 'Team',
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

function screenOptions(route: Route, color: string): JSX.Element {
  let iconName = '';

  switch (route.name) {
    case 'Team':
      iconName = 'team';
      break;
    case 'Search':
      iconName = 'search1';
      break;
    default:
      break;
  }
  return <Icon type="antdesign" name={iconName} size={22} color={color} />;
}
