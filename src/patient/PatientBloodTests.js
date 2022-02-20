import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Error from '../common/Error';
import SearchBar from '../common/SearchBar';
import EmptyState from '../common/EmptyState';
import CustomSpinner from '../common/CustomSpinner';
import { useGetPatientInfoQuery } from './patientContractApi';
import { useGetFileInfoQuery } from '../files/fileContractApi';

import FileModal from '../common/FileModal';

// import AddButton from '../common/AddButton';
const PatientFile = ({
  fileHash, sortTag, query,
}) => {
  const { data, error } = useGetFileInfoQuery({ fileHash });
  const [open, setOpen] = useState(false);
  const handleOpen = () => { setOpen(true); };
  const handleClose = () => {
    setOpen(false);
  };

  const search = (searchTerm, record) => {
    const normalizeQuery = searchTerm.toLowerCase();
    return (
      (searchTerm === '')
      || (record.file_name.toLowerCase().includes(normalizeQuery))
      || record.uploader_name.toLowerCase().includes(normalizeQuery)
    );
  };

  return (
    <>
      {
        (data && (data.record_type === sortTag || sortTag === '') && search(query, data) && (
          <>
            <TableRow
              hover
              onClick={handleOpen}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, textDecoration: 'none' }}
            >
              <TableCell component="th" scope="row">
                {data.file_name}
              </TableCell>
              <TableCell component="th" scope="row">
                {data.record_type}
              </TableCell>
              <TableCell>{data.uploader_name}</TableCell>
              <TableCell />
              <TableCell>{data.date_uploaded ?? ''}</TableCell>
            </TableRow>
            <FileModal handleOpen={handleOpen} handleClose={handleClose} open={open} data={data} />
          </>
        ))
        || (error && <TableRow><TableCell><Error message={error} /></TableCell></TableRow>)
      }
    </>
  );
};

const PatientBloodTests = (props) => {
  // const { pathname } = useLocation();
  const { data } = useGetPatientInfoQuery();
  const [sortTag] = useState('Blood test');
  const [searchTerm, setSearchTerm] = useState('');

  const tableContent = (filter, query) => {
    if (data) {
      // using index for id for now
      console.log(filter);
      return data.files.map((fileHash) => <PatientFile query={query} sortTag={filter} fileHash={fileHash} key={fileHash} />);
    } else {
      // Temporary, will be replaced with an error component or not
      return <TableRow><TableCell><CustomSpinner /></TableCell></TableRow>;
    }
  };

  const onQueryChange = (query) => {
    setSearchTerm(query);
  };

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h1">Blood Tests</Typography>
        <SearchBar onQueryChange={onQueryChange} />
      </Box>
      <div>
        {/* <FileCategoryTabs setSortTag={setSortTag} /> */}
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="List of patient files">
          <TableHead>
            <TableRow>
              <TableCell><Typography fontSize="small" fontWeight="bold">Name</Typography></TableCell>
              <TableCell><Typography fontSize="small" fontWeight="bold">Record Type</Typography></TableCell>
              <TableCell><Typography fontSize="small" fontWeight="bold">Uploader</Typography></TableCell>
              <TableCell><Typography fontSize="small" fontWeight="bold">Date Uploaded</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableContent(sortTag, searchTerm)}
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
