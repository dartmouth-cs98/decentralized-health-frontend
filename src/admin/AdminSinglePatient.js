import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useGetPatientInfoForDoctorQuery } from './adminContractApi';
import CustomSpinner from '../common/CustomSpinner';
import Error from '../common/Error';
import PatientFiles from '../files/PatientFiles';
import FileUploadModal from '../files/FileUploadModal';

// url is admin/patients/:id
// read id, ask database for eth address, call getPatientInfoForDoctor(address)
// we call this twice: first to get id in admin/patients, and then to get info
// data can change, call seems inexpensive, fine to leave, question later
// unless we time cache, even then, data can change

const btnStyle = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
};

const AdminSinglePatient = (props) => {
  const [open, setOpen] = useState(false);
  const { ethAddress } = useParams();
  const { data: patient, error } = useGetPatientInfoForDoctorQuery({ patientEthAddress: ethAddress });

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const getDOB = (userData) => {
    return (userData.dateOfBirth ? userData.dateOfBirth.split(' ').slice(1).join(' ') : ''); // takes out day of week
  };

  return (
    <div>
      { (patient
        && (
          <>
            <Typography variant="h1">{patient.name}</Typography>
            <Box>
              <Box sx={{ margin: '5px 0 5px 0' }}>
                <Box sx={{ display: 'flex', margin: '10px 0 30px 0' }}>
                  <Typography color="primary" sx={{ fontWeight: 'bold', margin: '0 10px 0 0' }}>Date of Birth -</Typography>
                  {console.log(patient)}
                  <Typography color="primary" sx={{ fontWeight: 'bold', margin: '0 10px 0 0' }}>{getDOB(patient)}</Typography>
                </Box>
                <Typography variant="h2">Files</Typography>
                <TableContainer>
                  <Table sx={{
                    minWidth: 650,
                    borderCollapse: 'separate',
                    borderSpacing: '0px 12px',
                    border: 'none',
                  }}
                    aria-label="List of patient files"
                  >
                    <TableHead>
                      <TableRow sx={{
                        border: 'none',
                      }}
                        aria-label="List of patient's files"
                      >
                        <TableCell width="25%"><Typography fontSize="small" fontWeight="bold">Name</Typography></TableCell>
                        <TableCell width="25%"><Typography fontSize="small" fontWeight="bold">Record Type</Typography></TableCell>
                        <TableCell width="25%"><Typography fontSize="small" fontWeight="bold">Uploader</Typography></TableCell>
                        <TableCell width="25%"><Typography fontSize="small" fontWeight="bold">Date Uploaded</Typography></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <PatientFiles fileView="patient" fetchHook={useGetPatientInfoForDoctorQuery} ethAddress={ethAddress} sortTag="" />
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
              <Button onClick={handleOpen} disableElevation disableRipple disableFocusRipple style={btnStyle} sx={{ flexDirection: 'column' }}>
                <AddIcon fontSize="large" />
                <Typography fontWeight="600" variant="button">Add File</Typography>
              </Button>
              <FileUploadModal open={open} handleClose={handleClose} handleOpen={handleOpen} />
            </Box>
          </>
        ))
        || (error && <Error message={error} />)
        || <CustomSpinner />}
    </div>
  );
};

export default AdminSinglePatient;
