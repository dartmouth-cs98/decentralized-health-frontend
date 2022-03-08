import React from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useGetAdminInfoQuery, useGetPatientInfoForDoctorQuery } from './adminContractApi';
import SearchBar from '../common/SearchBar';

const PatientRow = ({ ethAddress }) => {
  // TODO: error handling
  const { data: patientData } = useGetPatientInfoForDoctorQuery({ patientEthAddress: ethAddress });
  const navigate = useNavigate();
  const getDOB = (userData) => {
    return (userData.dateOfBirth ? userData.dateOfBirth.split(' ').slice(1).join(' ') : ''); // takes out day of week
  };

  const handlePatientClick = () => {
    navigate(`/admin/patients/${ethAddress}`);
  };
  return (
    <>
      {patientData
        ? (
          <TableRow
            hover
            key={ethAddress}
            onClick={handlePatientClick}
            style={{ textDecoration: 'none' }}
            sx={{ border: 0, bgcolor: '#f0f8ff', textDecoration: 'none' }}
          >
            <TableCell sx={{
              display: 'flex',
              alignItems: 'baseline',
              border: 'none',
            }}
            >
              <Avatar sx={{ mr: 2, bgcolor: '#2F80ED' }}>{`${patientData.name.split(' ')[0][0]}${patientData.name.split(' ')[2][0]}`}</Avatar>
              {patientData.name}
            </TableCell>
            <TableCell sx={{ border: 'none' }}>{getDOB(patientData)}
            </TableCell>
            <TableCell sx={{ border: 'none' }}>
              <Button onClick={(event) => event.stopPropagation()}
                href={`mailto:${patientData.email ?? ''}`}
                variant="outlined"
                startIcon={<MailOutlineIcon />}
              >Contact
              </Button>
            </TableCell>
          </TableRow>
        )
        : <TableRow><TableCell><CircularProgress /></TableCell></TableRow>}
    </>
  );
};

const AdminPatients = () => {
  const { data } = useGetAdminInfoQuery();

  const tableContent = () => {
    if (data) {
      return data.patientList.map((ethAddress) => <PatientRow ethAddress={ethAddress} key={ethAddress} />);
    } else {
      // Temporary, will be replaced with an error component
      return <TableRow><TableCell><CircularProgress /></TableCell></TableRow>;
    }
  };

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h1">Patients</Typography>
        <SearchBar />
      </Box>

      <TableContainer>
        <Table sx={{
          minWidth: 650,
          borderCollapse: 'separate',
          borderSpacing: '0px 12px',
          border: 'none',
        }}
          aria-label="patient table"
        >
          <TableHead>
            <TableRow width="33%">
              <TableCell>
                <Typography fontSize="small" fontWeight="bold">Name</Typography>
              </TableCell>
              <TableCell width="33%"><Typography fontSize="small" fontWeight="bold">Date Of Birth</Typography></TableCell>
              <TableCell width="33%"><Typography fontSize="small" fontWeight="bold">Contact</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableContent()}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdminPatients;
