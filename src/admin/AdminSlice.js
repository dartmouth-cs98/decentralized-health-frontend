import { createSlice } from '@reduxjs/toolkit';

// TODO: shape of the state from integration
const initialState = {
  id: 0,
  displayPhoto: 'someurl',
  name: 'name',
  error: null,
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
  },
});

export default adminSlice.reducer;
