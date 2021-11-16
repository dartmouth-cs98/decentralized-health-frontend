import contractApi from '../web3/contractApi';
import ServiceContract from '../contracts/Service.json';

export const fileContractApi = contractApi.injectEndpoints({
  endpoints: (builder) => ({
    getFileInfo: builder.query({
      query: ({ fileHash }) => ({
        contract: ServiceContract, method: 'getFileInfo', action: 'CALL', params: { fileHash },
      }),
    }),
  }),
});

export const {
  useGetFileInfoQuery,
} = fileContractApi;
