import { createApi } from '@reduxjs/toolkit/query/react';
import web3BaseQuery from './web3BaseQuery';

const contractApi = createApi({
  reducerPath: 'contracts',
  baseQuery: web3BaseQuery(),
  tagTypes: ['PatientFiles', 'PatientDoctors'],
  endpoints: () => ({}),
});

export default contractApi;
