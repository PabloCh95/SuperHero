import HeroSlice from '../store/HeroSlice';
import UserSlice from '../store/UserSlice';

export interface Powerstats {
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  combat: string;
}

export interface Biography {
  fullname?: string;
  alteregos?: string;
  aliases?: string[];
  placeofbirth?: string;
  firstappearance?: string;
  publisher?: string;
  alignment?: string;
}

export interface Appearance {
  gender?: string;
  race?: string;
  height?: string[];
  weight?: string[];
  eyecolor?: string;
  haircolor?: string;
}

export interface Work {
  occupation?: string;
  base?: string;
}

export interface Connections {
  groupaffiliation?: string;
  relatives?: string;
}

export interface Image {
  url?: string;
}

export interface Result {
  id?: string;
  name?: string;
  powerstats: Powerstats;
  biography?: Biography;
  appearance?: Appearance;
  work?: Work;
  connections?: Connections;
  image?: Image;
}

export interface RootObject {
  response?: string;
  resultsfor?: string;
  results?: Result[];
}

export interface Route {
  key: string;
  name: string;
  params: object;
}

export interface User {
  data: any;
  token: string;
}
export interface Err {
  error: string;
}

export interface RootDefaultState {
  hero: typeof HeroSlice;
  user: typeof UserSlice;
}
