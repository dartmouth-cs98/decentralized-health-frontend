import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contractApi from '../web3/contractApi';
import { userApi } from '../user/userApi';
import tourReducer from '../joyride/tourSlice';

const reducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
  [contractApi.reducerPath]: contractApi.reducer,
  tour: tourReducer,
});

const middleware = (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware).concat(contractApi.middleware);

export default configureStore({
  reducer,
  middleware,
});
