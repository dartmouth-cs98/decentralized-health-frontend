import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import adminReducer from '../admin/AdminSlice';
import { userApi } from '../user/UserSlice';

const reducer = combineReducers({
  admin: adminReducer,
  [userApi.reducerPath]: userApi.reducer,
});

const middleware = (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware);

export default configureStore({
  reducer,
  middleware,
});
