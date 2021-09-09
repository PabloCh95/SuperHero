import {URLuser} from './config';
import axios from 'axios';
import {User} from '../utils/interface';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function loginApi({values}): Promise<User> {
  const data = await axios.post(URLuser, values);

  return data;
}

export function logout() {
  AsyncStorage.removeItem('token');
}
