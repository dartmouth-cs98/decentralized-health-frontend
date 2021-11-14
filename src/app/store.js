import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contractApi from '../web3/contractApi';
import { userApi } from '../user/userApi';

const reducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
  [contractApi.reducerPath]: contractApi.reducer,
});

const middleware = (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware).concat(contractApi.middleware);

export default configureStore({
  reducer,
  middleware,
});
