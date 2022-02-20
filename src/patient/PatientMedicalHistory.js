import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import Box from '@mui/material/Box';
import Error from '../common/Error';
import SearchBar from '../common/SearchBar';
import EmptyState from '../common/EmptyState';
import CustomSpinner from '../common/CustomSpinner';
import { useGetPatientInfoQuery } from './patientContractApi';
import { useGetFileInfoQuery } from '../files/fileContractApi';
import FileModal from '../common/FileModal';

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
              sx={{ border: 0, bgcolor: '#f0f8ff' }}
            >
              <TableCell sx={{
                border: 'none',
                display: 'flex',
              }}
              >
                <FolderOpenIcon sx={{ mr: 2 }} />
                {data.file_name}
              </TableCell>
              <TableCell sx={{
                border: 'none',
              }}
              >
                {data.record_type}
              </TableCell>
              <TableCell sx={{
                border: 'none',
              }}
              >{data.uploader_name}
              </TableCell>
              <TableCell sx={{
                border: 'none',
              }}
              >{data.date_uploaded ?? ''}
              </TableCell>
            </TableRow>
            <FileModal handleOpen={handleOpen} handleClose={handleClose} open={open} data={data} />
          </>
        ))
        || (error && <TableRow><TableCell><Error message={error} /></TableCell></TableRow>)
      }
    </>
  );
};

const PatientMedicalHistory = (props) => {
  const { data } = useGetPatientInfoQuery();
  const [sortTag] = useState('Medical history');
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
        <Typography variant="h1">Medical History</Typography>
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

export default PatientMedicalHistory;
