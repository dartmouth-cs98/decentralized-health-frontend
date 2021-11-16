import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import SearchBar from '../common/SearchBar';
import { useGetPatientInfoQuery } from './patientContractApi';
import { useGetFileInfoQuery } from '../files/fileContractApi';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  borderRadius: 1,
  //   border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const PatientFile = ({ fileHash, id }) => {
  const { data } = useGetFileInfoQuery({ fileHash });
  const [open, setOpen] = useState(false);

  const handleOpen = () => { setOpen(true); };

  const handleClose = () => { setOpen(false); };

  return (
    <>
      {
      data ? (
        <TableRow
          sx={{ '&:last-child td, &:last-child th': { border: 0 }, textDecoration: 'none' }}
        >
          <TableCell component="th" scope="row">
            {`${data.file_name}.${data.record_type}`}
          </TableCell>
          <TableCell align="right">{data.uploader}</TableCell>
          <TableCell align="right">
            <Button onClick={handleOpen}>
              View
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography align="center" id="modal-modal-title" variant="h2" component="h2">
                  {`${data.file_name}.${data.record_type}`}
                </Typography>
                <Box sx={{
                  display: 'grid',
                  gap: 1,
                  gridTemplateColumns: 'repeat(1fr)',
                }}
                  component="form"
                >
                  <Typography>{data.contents}</Typography>
                </Box>
              </Box>
            </Modal>
          </TableCell>
        </TableRow>
      ) : <TableRow><TableCell><CircularProgress /></TableCell></TableRow>
    }
    </>
  );
};

const PatientFiles = (props) => {
  const { data } = useGetPatientInfoQuery();

  const tableContent = () => {
    if (data) {
      // using index for id for now
      return data.files.map((fileHash) => <PatientFile fileHash={fileHash} key={fileHash} />);
    } else {
      // Temporary, will be replaced with an error component or not
      return <TableRow><TableCell><CircularProgress /></TableCell></TableRow>;
    }
  };

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h1">Files</Typography>
        <SearchBar />
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><Typography variant="h2">Name</Typography></TableCell>
              <TableCell align="right"><Typography variant="h2">Uploader Adress</Typography></TableCell>
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

export default PatientFiles;
