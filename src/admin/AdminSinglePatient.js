import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import { useGetPatientInfoForDoctorQuery, useAddFileToPatientMutation } from './adminContractApi';
import { useGetFileInfoQuery } from '../files/fileContractApi';
import CustomSpinner from '../common/CustomSpinner';
import Error from '../common/Error';

// url is admin/patients/:id
// read id, ask database for eth address, call getPatientInfoForDoctor(address)
// we call this twice: first to get id in admin/patients, and then to get info
// data can change, call seems inexpensive, fine to leave, question later
// unless we time cache, even then, data can change

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

const btnStyle = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
};

const FileRow = ({ fileHash }) => {
  const { data, error } = useGetFileInfoQuery({ fileHash });
  const [open, setOpen] = useState(false);

  const handleOpen = () => { setOpen(true); };

  const handleClose = () => { setOpen(false); };

  return (
    <>
      {
      (data && (
        <TableRow
          sx={{ '&:last-child td, &:last-child th': { border: 0 }, textDecoration: 'none' }}
        >
          <TableCell component="th" scope="row">
            {data.file_name}
          </TableCell>
          <TableCell component="th" scope="row">
            {data.record_type}
          </TableCell>
          <TableCell>{data.uploader_name}</TableCell>
          <TableCell>
            <Button onClick={handleOpen}>
              VIEW
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography align="center" id="modal-modal-title" variant="h2" component="h2">
                  {`${data.file_name} | ${data.record_type}`}
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
      ))
      || (error && <TableRow><TableCell><Error message={error} /></TableCell></TableRow>)
      || <TableRow><TableCell><CustomSpinner /></TableCell></TableRow>
    }
    </>
  );
};

const AdminSinglePatient = (props) => {
  const [open, setOpen] = useState(false);
  const [fileType, setFileType] = useState('');
  const [fileContents, setFileContents] = useState('');
  const [file, setFile] = useState(null);
  const [clicked, setClicked] = useState(false);
  const { ethAddress } = useParams();
  const { data: patient, error } = useGetPatientInfoForDoctorQuery({ patientEthAddress: ethAddress });
  const [addFileToPatient, result] = useAddFileToPatientMutation();

  const handleOpen = () => { setOpen(true); };

  const handleClose = () => { setOpen(false); };

  const cleanUp = () => {
    setFileType('');
    setFileContents('');
    setFile(null);
    setClicked(false);
  };

  const onFileUpload = (event) => {
    const reader = new FileReader();
    const uploadedFile = event.target.files[0];

    reader.onloadend = () => {
      setFileContents(reader.result);
    };

    if (uploadedFile) {
      reader.readAsText(uploadedFile);
      setFileContents(reader.result);
      setFile(uploadedFile);
    }
  };

  const handleAddFile = async () => {
    try {
      setClicked(true);
      await addFileToPatient({
        fileName: file.name, fileType, patientEthAddress: ethAddress, fileContents,
      });
      if (!result.isLoading) {
        cleanUp();
        handleClose();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const tableContent = () => {
    if (patient) {
      return patient.files.map((fileHash) => <FileRow fileHash={fileHash} key={fileHash} />);
    } else {
      // Temporary, will be replaced with an error component
      return <CustomSpinner />;
    }
  };

  return (
    <div>
      { (patient
        && (
          <>
            <Typography variant="h1">{patient.name}</Typography>
            <Box sx={{ display: 'flex' }}>
              {/* TODO: make generic (or not) */}
              <Box sx={{ margin: '5px 0 5px 0' }}>
                <Typography variant="h2">General Information</Typography>
                <Box sx={{ display: 'flex', margin: '10px 0 30px 0' }}>
                  <Typography sx={{ fontWeight: 'bold', margin: '0 10px 0 0' }}>Age</Typography>
                  <Typography>{patient.age}</Typography>
                </Box>
                {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0 10px 0' }}>
                <Typography sx={{ fontWeight: 'bold' }}>Phone number</Typography>
                <Typography>{patient.num}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0 10px 0' }}>
                <Typography sx={{ fontWeight: 'bold' }}>Address</Typography>
                <Typography>{patient.address}</Typography>
              </Box>
            </Box>
            <Box sx={{ margin: '40px 0 5px 0' }}>
              <Typography variant="h2">Nutritional Values</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0 10px 0' }}>
                <Typography sx={{ fontWeight: 'bold' }}>Height</Typography>
                <Typography>{patient.height}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0 10px 0' }}>
                <Typography sx={{ fontWeight: 'bold' }}>Weight</Typography>
                <Typography>{patient.weight}</Typography>
              </Box> */}
                <Typography variant="h2">Files</Typography>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="patient table">
                    <TableHead>
                      <TableRow>
                        <TableCell><Typography variant="h3">Name</Typography></TableCell>
                        <TableCell><Typography variant="h3">Record type</Typography></TableCell>
                        <TableCell><Typography variant="h3">Uploader</Typography></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {tableContent()}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
              <Button onClick={handleOpen} disableElevation disableRipple disableFocusRipple style={btnStyle} sx={{ flexDirection: 'column' }}>
                <AddIcon fontSize="large" />
                <Typography fontWeight="600" variant="button">Add File</Typography>
              </Button>

              {/* TODO: Might be cleaner to refactor this into component */}
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography align="center" id="modal-modal-title" variant="h2" component="h2">
                    Add File
                  </Typography>
                  <Box sx={{
                    display: 'grid',
                    gap: 1,
                    gridTemplateColumns: 'repeat(1fr)',
                  }}
                    component="form"
                  >
                    <FormControl fullWidth size="small" margin="normal">
                      <InputLabel>File type</InputLabel>
                      <Select
                        value={fileType}
                        label="File type"
                        onChange={(event) => { setFileType(event.target.value); }}
                      >
                        <MenuItem value="Medical history">Medical history</MenuItem>
                        <MenuItem value="Blood test">Blood test</MenuItem>
                        <MenuItem value="Procedure">Procedure</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl fullWidth size="small" margin="normal">
                      <InputLabel>Upload file</InputLabel>
                      <Input type="file" name="file" onChange={onFileUpload} />
                    </FormControl>
                    <Button
                      type="button"
                      color="primary"
                      variant="contained"
                      onClick={handleAddFile}
                      fullWidth
                    >Add file
                    </Button>
                    {clicked && <CustomSpinner />}
                  </Box>
                </Box>
              </Modal>
            </Box>

            {/* TOD0: handle menus for bloodtests, physicals, etc */}
            {/* TOD0: how do these differentiate from left drawer menu */}
          </>
        ))
        || (error && <Error message={error} />)
        || <CustomSpinner />}
    </div>
  );
};

export default AdminSinglePatient;
