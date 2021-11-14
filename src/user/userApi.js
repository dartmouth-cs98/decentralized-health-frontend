/* eslint-disable camelcase */
// Backend set the case
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../constants';

export const userApi = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getUserById: builder.query({
      query: (id) => ({ url: `users/${id}` }),
    }),
    createUser: builder.mutation({
      query: ({
        name, email, password, admin, eth_address,
      }) => ({
        url: 'users',
        method: 'POST',
        body: {
          name, email, password, admin, eth_address,
        },
      }),
    }),
    getUserIdByAddress: builder.query({
      query: (ethAddress) => ({ url: `users/address/${ethAddress}` }),
      transformResponse: (response) => response.id,
    }),
  }),
});

export const { useGetUserByIdQuery, useCreateUserMutation, useGetUserIdByAddressQuery } = userApi;
