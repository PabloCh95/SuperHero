import {createSlice} from '@reduxjs/toolkit';

const UserSlice = createSlice({
  name: 'user',
  initialState: '',
  reducers: {
    addToken(_state, action) {
      return (_state = action.payload);
    },
  },
});

export const {addToken} = UserSlice.actions;
export default UserSlice.reducer;
