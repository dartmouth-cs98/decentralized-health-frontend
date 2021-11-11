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
import Box from '@mui/material/Box';
import { useGetAdminInfoQuery, useGetPatientInfoForDoctorQuery } from './adminContractApi';
import SearchBar from '../common/SearchBar';

// Data coming back seems to be a list of addresses
// how to get patient info from addresses?
// Prefetch getpatientinfofordoctor (blockchain needs to adjust struct)
// Patient's page: backend(eth-address to id, vice versa. url contains db id)

// TODO: this flow ^
// TEMPORARILY replace id directly with eth_address. Rewrite in future

const PatientRow = ({ ethAddress }) => {
  // TODO: error handling
  const { data: patientData } = useGetPatientInfoForDoctorQuery(ethAddress);

  return (
    <>
      {patientData
        ? (
          <TableRow
            key={ethAddress}
            sx={{ '&:last-child td, &:last-child th': { border: 0 }, textDecoration: 'none' }}
          >
            <TableCell component="th" scope="row">
              {patientData.name}
            </TableCell>
            <TableCell align="right">{patientData.age}</TableCell>
            <TableCell align="right">
              <Link to={`${ethAddress}`} style={{ textDecoration: 'none' }}>View</Link>
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
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h1">Patients</Typography>
        <SearchBar />
      </Box>

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
