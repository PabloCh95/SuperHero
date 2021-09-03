import React from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
//screens
import InitialTab from './InitialTab';
import DetailsHero from '../screens/DetailsHero';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function navigation(): JSX.Element {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="initial"
          component={InitialTab}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsHero}
          options={{headerTintColor: 'orange', headerTitleAlign: 'center'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
