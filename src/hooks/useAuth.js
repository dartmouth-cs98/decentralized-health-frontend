/* eslint-disable consistent-return */
import { useState, useEffect } from 'react';
import { useGetAdminInfoQuery } from '../admin/adminContractApi';
import { useGetPatientInfoQuery } from '../patient/patientContractApi';

const useAuth = () => {
  console.log('in here');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPatient, setIsPatient] = useState(false);
  const { data: patientData, isFetching: patientFetching } = useGetPatientInfoQuery();
  const { data: doctorData, isFetching: doctorFetching } = useGetAdminInfoQuery();

  // Attempt to get patient and doctor info. If it fails, then user is not
  // Valid
  // Utility of login?

  useEffect(() => {
    if (!patientFetching && patientData) {
      console.log('checking patient');
      setIsPatient(true);
    }
    if (!doctorFetching && doctorData) {
      console.log('but not here?');
      console.log(doctorData);
      console.log(doctorFetching);
      setIsAdmin(true);
    }
    console.log(patientData);
    console.log(patientFetching);
    console.log(doctorData);
    console.log(doctorFetching);
  }, [patientFetching, doctorFetching, doctorData, patientData]);

  console.log('about to return');
  console.log(isAdmin, isPatient);

  if (!doctorFetching) {
    return { isAdmin, isPatient };
  }
};

export default useAuth;
