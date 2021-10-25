import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import adminReducer from '../admin/AdminSlice';

const reducer = combineReducers({
  admin: adminReducer,
});

export default configureStore({
  reducer,
});
