import React, {useEffect} from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import {addToken} from '../store/UserSlice';
//screens
import InitialTab from './InitialTab';
import DetailsHero from '../screens/DetailsHero';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Splash from '../screens/Splash';

//import {RootDefaultState} from '../utils/interface';
//import {Result} from '../utils/interface';
//import {User} from '../utils/interface';

const Stack = createNativeStackNavigator();

export default function navigation(): JSX.Element {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.user);

  const login = async () => {
    try {
      let Token = await AsyncStorage.getItem('token');
      dispatch(addToken(Token));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    login();
  }, []);

  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator>
        {selector ? (
          <>
            <Stack.Screen
              name="Initial"
              component={InitialTab}
              options={{header: () => null}}
            />
            <Stack.Screen
              name="Details"
              component={DetailsHero}
              options={{headerTintColor: 'orange', headerTitleAlign: 'center'}}
            />
          </>
        ) : (
          <>
            {/* <Stack.Screen
              name="splash"
              component={Splash}
              options={{header: () => null}}
            />*/}
            <Stack.Screen
              name="login"
              component={Login}
              options={{header: () => null}}
            />
            <Stack.Screen
              name="register"
              component={Register}
              options={{title: 'Register', headerTintColor: 'orange'}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
