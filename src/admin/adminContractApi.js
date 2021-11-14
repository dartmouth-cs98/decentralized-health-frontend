import contractApi from '../web3/contractApi';
import ServiceContract from '../contracts/Service.json';

export const adminContractApi = contractApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdminInfo: builder.query({
      query: () => ({ contract: ServiceContract, method: 'getDoctorInfo', action: 'CALL' }),
      transformResponse: (response) => ({ name: response[0], clinic: response[1] }),
    }),
    addDoctorToChain: builder.mutation({
      query: ({ name, clinic }) => ({
        contract: ServiceContract, method: 'signupDoctor', action: 'SEND', params: { name, clinic },
      }),
    }),
    addFileToPatient: builder.mutation({
      query: ({
        fileName, fileType, fileHash, patientEthAddress, fileContents,
      }) => ({
        contract: ServiceContract,
        method: 'addFile',
        action: 'SEND',
        params: {
          fileName, fileType, fileHash, patientEthAddress, fileContents,
        },
      }),
    }),
    getPatientInfoForDoctor: builder.query({
      query: ({ patientEthAddress }) => ({
        contract: ServiceContract, method: 'getPatientInfoForDoctor', action: 'CALL', params: { patientEthAddress },
      }),
      transformResponse: (response) => ({ name: response[0], age: response[1], files: response[2] }),
    }),
  }),
});

export const {
  useGetAdminInfoQuery, useAddDoctorToChainMutation, useAddFileToPatientMutation, useGetPatientInfoForDoctorQuery,
} = adminContractApi;
