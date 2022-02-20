/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  run: false,
  stepIndex: 0,
};

export const tourSlice = createSlice({
  name: 'Tour',
  initialState,
  reducers: {
    tourStarted: (state) => {
      state.run = true;
      state.stepIndex = 0;
    },
    tourEnded: (state) => {
      state.run = false;
      state.stepIndex = 0;
    },
    stepUpdated: (state, action) => {
      state.stepIndex = action.payload;
    },
  },
});

export const { tourStarted, tourEnded, stepUpdated } = tourSlice.actions;
export default tourSlice.reducer;
