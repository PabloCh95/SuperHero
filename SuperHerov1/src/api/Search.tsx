import {URL} from './config';
import axios from 'axios';
import {RootObject} from '../utils/interface';

export async function getSearch(search: string): Promise<RootObject> {
  let result = await axios.get(`${URL}/search/${search}`);

  return result.data;
}
