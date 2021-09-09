import React, {useState, useEffect, createContext} from 'react';
import jwtDecode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {logout} from '../api/User';

export const AuthContext = createContext();

export default function AutProvider(props) {
  const {children} = props;
  const [user, setUser] = useState({
    user: null, //cuando el usuario no esta logueado
    isLoading: true,
  });

  useEffect(() => {
    checkUserLogin(setUser);
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

function checkUserLogin(setUser) {
  const accessToken = AsyncStorage.getItem('token');

  if (!accessToken) {
    logout();
    setUser({
      user: null,
      isLoading: false,
    });
  } else {
    setUser({
      isLoading: false,
      user: accessToken,
    });
  }
}
