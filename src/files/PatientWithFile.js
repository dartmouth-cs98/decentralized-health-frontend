import React from 'react';
import File from './File';
import { useGetPatientInfoForDoctorQuery } from '../admin/adminContractApi';

const PatientWithFile = ({ ethAddress, sortTag, fileView }) => {
  const { data: patientData } = useGetPatientInfoForDoctorQuery({ patientEthAddress: ethAddress });
  if (patientData && patientData.files) {
    return patientData.files.map((hash) => <File fileHash={hash} key={hash} patientOwner={patientData.name} sortTag={sortTag} fileView={fileView} />);
  } else {
    return null;
  }
};

export default PatientWithFile;
