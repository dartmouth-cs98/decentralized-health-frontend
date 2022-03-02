import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SearchBar from '../common/SearchBar';
import EmptyState from '../common/EmptyState';
import { useGetPatientInfoQuery } from './patientContractApi';
import PatientFiles from '../files/PatientFiles';

const PatientBloodTests = (props) => {
  const { data } = useGetPatientInfoQuery();
  const [searchTerm, setSearchTerm] = useState('');

  const onQueryChange = (query) => {
    setSearchTerm(query);
  };

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h1">Blood Tests</Typography>
        <SearchBar onQueryChange={onQueryChange} />
      </Box>
      <div />
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
            >
              <TableCell width="25%"><Typography fontSize="small" fontWeight="bold">Name</Typography></TableCell>
              <TableCell width="25%"><Typography fontSize="small" fontWeight="bold">Record Type</Typography></TableCell>
              <TableCell width="25%"><Typography fontSize="small" fontWeight="bold">Uploader</Typography></TableCell>
              <TableCell width="25%"><Typography fontSize="small" fontWeight="bold">Date Uploaded</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <PatientFiles query={searchTerm} fileView="patient" fetchHook={useGetPatientInfoQuery} sortTag="Blood test" />
          </TableBody>
        </Table>
      </TableContainer>
      {data && data.files && data.files.length === 0
        ? <EmptyState title="No Files on your records" />
        : ''}
    </div>
  );
};

export default PatientBloodTests;
