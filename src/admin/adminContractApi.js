import contractApi from '../web3/contractApi';
import ServiceContract from '../contracts/Service.json';

// TODO: URGENT NEXT TERM: Blockchain needs to avoid duplicates everywhere! For now,
// Manually avoid duplicates by converting to set and back to array
export const adminContractApi = contractApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdminInfo: builder.query({
      query: () => ({ contract: ServiceContract, method: 'getDoctorInfo', action: 'CALL' }),
      transformResponse: (response) => ({ name: response[0], patientList: [...new Set(response[1])] }),
    }),
    addDoctorToChain: builder.mutation({
      query: ({ name, clinic }) => ({
        contract: ServiceContract, method: 'signupDoctor', action: 'SEND', params: { name, clinic },
      }),
    }),
    addFileToPatient: builder.mutation({
      query: ({
        fileName, fileType, patientEthAddress, fileContents,
      }) => ({
        contract: ServiceContract,
        method: 'addFile',
        action: 'SEND',
        params: {
          fileName, fileType, patientEthAddress, fileContents,
        },
      }),
      invalidatesTags: ['PatientFiles'],
    }),
    getPatientInfoForDoctor: builder.query({
      query: ({ patientEthAddress }) => ({
        contract: ServiceContract, method: 'getPatientInfoForDoctor', action: 'CALL', params: { patientEthAddress },
      }),
      providesTags: ['PatientFiles'],
      transformResponse: (response) => ({ name: response[0], age: response[1], files: [...new Set(response[2])] }),
    }),
  }),
});

export const {
  useGetAdminInfoQuery, useAddDoctorToChainMutation, useAddFileToPatientMutation, useGetPatientInfoForDoctorQuery,
} = adminContractApi;
