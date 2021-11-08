import { createApi } from '@reduxjs/toolkit/query/react';
import web3BaseQuery from '../web3/web3BaseQuery';
import DoctorContract from '../contracts/Doctor.json';

export const contractApi = createApi({
  reducerPath: 'contract',
  baseQuery: web3BaseQuery({ contract: DoctorContract }),
  endpoints: (builder) => ({
    get: builder.query({
      query: () => ({ method: 'getDoctorInfo', action: 'CALL' }),
    }),
    put: builder.mutation({
      query: ({ name, clinic }) => ({ method: 'signupDoctor', action: 'SEND', params: { name, clinic } }),
    }),
  }),
});

export const { useGetQuery, usePutMutation } = contractApi;
