import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SearchBar from '../common/SearchBar';
import PatientFiles from '../files/PatientFiles';
import { useGetAdminInfoQuery } from './adminContractApi';

const AdminProcedures = (props) => {
  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h1">Procedures</Typography>
        <SearchBar />
      </Box>

      <TableContainer>
        <Table sx={{
          minWidth: 650,
          borderCollapse: 'separate',
          borderSpacing: '0px 12px',
          border: 'none',
        }}
          aria-label="Medical Procedure files"
        >
          <TableHead>
            <TableRow sx={{
              border: 'none',
            }}
            >
              <TableCell width="20%"><Typography fontSize="small" fontWeight="bold">Name</Typography></TableCell>
              <TableCell width="20%"><Typography fontSize="small" fontWeight="bold">Record Type</Typography></TableCell>
              <TableCell width="20%"><Typography fontSize="small" fontWeight="bold">Uploader</Typography></TableCell>
              <TableCell width="20%"><Typography fontSize="small" fontWeight="bold">Date Uploaded</Typography></TableCell>
              <TableCell width="20%"><Typography fontSize="small" fontWeight="bold">Patient</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <PatientFiles fileView="admin" fetchHook={useGetAdminInfoQuery} sortTag="Procedure" />
          </TableBody>
        </Table>
      </TableContainer>
      {/* {data && data.files && data.files.length === 0
            ? <EmptyState title="No Files on your records" />
            : ''} */}
    </div>
  );
};

export default AdminProcedures;
