import contractApi from '../web3/contractApi';
import ServiceContract from '../contracts/Service.json';

// TODO: contract does not prevent a doctor from being granted access twice!
export const patientContractApi = contractApi.injectEndpoints({
  endpoints: (builder) => ({
    getPatientInfo: builder.query({
      query: () => ({ contract: ServiceContract, method: 'getPatientInfo', action: 'CALL' }),
      transformResponse: (response) => ({
        name: response[0], dateOfBirth: response[1], files: response[2], doctorList: [...new Set(response[3])], email: response[4],
      }),
      providesTags: ['PatientDoctors'],
    }),
    addPatientToChain: builder.mutation({
      query: ({ name, dateOfBirth, email }) => ({
        contract: ServiceContract, method: 'signupPatient', action: 'SEND', params: { name, dateOfBirth, email },
      }),
      transformResponse: (response) => ({
        name: response[0], dateOfBirth: response[1], ethAddress: response[2], files: response[3], doctorList: response[4], email: response[4],
      }),
    }),
    grantDoctorAccess: builder.mutation({
      query: ({ doctorEthAddress }) => ({
        contract: ServiceContract, method: 'grantDoctorAccess', action: 'SEND', params: { doctorEthAddress },
      }),
      invalidatesTags: ['PatientDoctors'],
    }),
    revokeDoctorAccess: builder.mutation({
      query: ({ doctorEthAddress }) => ({
        contract: ServiceContract, method: 'revokeDoctorAccess', action: 'SEND', params: { doctorEthAddress },
      }),
      invalidatesTags: ['PatientDoctors'],
    }),
    getDoctorInfoForPatient: builder.query({
      query: ({ doctorEthAddress }) => ({
        contract: ServiceContract, method: 'getDoctorInfoForPatient', action: 'CALL', params: { doctorEthAddress },
      }),
      transformResponse: (response) => ({
        name: response[0], clinic: response[1], email: response[2],
      }),
    }),
  }),
});

export const {
  useGetPatientInfoQuery, useAddPatientToChainMutation, useGrantDoctorAccessMutation, useRevokeDoctorAccessMutation, useGetDoctorInfoForPatientQuery,
} = patientContractApi;
