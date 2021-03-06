import {createSlice} from '@reduxjs/toolkit';
import {Result} from '../utils/interface';
import {PayloadAction} from '@reduxjs/toolkit';

const HeroSlice = createSlice({
  name: 'hero',
  initialState: [],
  reducers: {
    addHeros: (
      state: Result[],
      action: {
        payload: Result;
        type: string;
      },
    ): void => {
      state.push(action.payload);
    },
    deleteHeros: (state: Result[], action: PayloadAction<Result>): Result[] => {
      state = [
        ...state.filter(element => {
          return element?.id !== action.payload.id;
        }),
      ];
      return state;
    },
  },
});

export const {addHeros, deleteHeros} = HeroSlice.actions;
export default HeroSlice.reducer;
