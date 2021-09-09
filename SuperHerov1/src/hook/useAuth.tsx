import {useContext} from 'react';
import {AuthContext} from '../providers/AuthProvider';
// lo que va a hacer este hook es devolver todos los datos que estan dentro del token

export default () => useContext(AuthContext);

/*import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAuth = () => {
  const [token, setToken] = useState<Promise<string>>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    {
      async () => {
        setToken(await AsyncStorage.getItem('token'));
        setLoading(true);
      };
    }
  }, [token]);

  return {
    token,
    loading,
  };
};

export default useAuth;
*/
