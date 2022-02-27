import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import File from './File';
import PatientWithFile from './PatientWithFile';

const PatientFiles = ({
  fetchHook, query, sortTag, fileView, ethAddress,
}) => {
  const { data } = fetchHook(ethAddress ? { patientEthAddress: ethAddress } : ''); // could be admin/ patient

  const tableContent = () => {
    console.log(data); console.log(ethAddress);
    console.log(query, sortTag, fileView);
    if (data) {
      let files = [];
      if (fileView === 'patient') {
        files = data.files.map((fileHash) => <File query={query} sortTag={sortTag} fileHash={fileHash} key={fileHash} />);
      } else if (fileView === 'admin' && data.patientList) {
        for (const patientEthAddress of data.patientList) {
          files.push(<PatientWithFile ethAddress={patientEthAddress} key={patientEthAddress} sortTag={sortTag} fileView={fileView} />);
        }
      }
      return files;
    } else {
      return <TableRow><TableCell>Empty Files</TableCell></TableRow>;
    }
  };
  return (tableContent(sortTag, query, fileView));
};

export default PatientFiles;
