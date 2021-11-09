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
        name, email, password, isAdmin,
      }) => ({
        url: 'users',
        method: 'POST',
        body: {
          name, email, password, isAdmin,
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
