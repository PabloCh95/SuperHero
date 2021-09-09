import {configureStore} from '@reduxjs/toolkit';
import HeroSlice from './HeroSlice';
import UserSlice from './UserSlice';

export default configureStore({
  reducer: {
    hero: HeroSlice,
    user: UserSlice,
  },
});
