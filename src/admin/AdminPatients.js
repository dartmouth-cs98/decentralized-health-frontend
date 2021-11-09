import React from 'react';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useGetAdminInfoQuery, useGetPatientInfoQuery } from './AdminContractApi';
import { useGetUserIdByAddressQuery } from '../user/userApi';

// Data coming back seems to be a list of addresses
// how to get patient info from addresses?
// Prefetch getpatientinfofordoctor (blockchain needs to adjust struct)
// Patient's page: backend(eth-address to id, vice versa. url contains db id)

const PatientRow = ({ ethAddress }) => {
  // TODO: error handling
  const { data: patientData } = useGetPatientInfoQuery(ethAddress);
  const { data: patientId } = useGetUserIdByAddressQuery(ethAddress);

  return (
    <>
      {patientData && patientId
        ? (
          <TableRow
            key={patientId}
            sx={{ '&:last-child td, &:last-child th': { border: 0 }, textDecoration: 'none' }}
          >
            <TableCell component="th" scope="row">
              {patientData.name}
            </TableCell>
            <TableCell align="right">{patientData.age}</TableCell>
            <TableCell align="right">
              <Link to={`${patientId}`} style={{ textDecoration: 'none' }}>View</Link>
            </TableCell>
          </TableRow>
        )
        : <tr><td>error</td></tr>}
    </>
  );
};

const AdminPatients = () => {
  const { data } = useGetAdminInfoQuery();

  const tableContent = () => {
    if (data) {
      return data[1].map((ethAddress) => <PatientRow ethAddress={ethAddress} />);
    } else {
      // Temporary, will be replaced with an error component
      return <tr><td>error</td></tr>;
    }
  };

  return (
    <div>
      <Typography variant="h1">Patients</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Age</TableCell>
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
