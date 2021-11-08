import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import adminReducer from '../admin/AdminSlice';
import { contractApi } from '../admin/contractApi';
import { userApi } from '../user/UserSlice';

const reducer = combineReducers({
  admin: adminReducer,
  [userApi.reducerPath]: userApi.reducer,
  [contractApi.reducerPath]: contractApi.reducer,
});

const middleware = (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware).concat(contractApi.middleware);

export default configureStore({
  reducer,
  middleware,
});
