import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import CircularProgress from '@mui/material/CircularProgress';
import SearchBar from '../common/SearchBar';
import InfoPopover from '../common/InfoPopover';
import { addDoctorInfo, signTransaction } from '../common/InfoText';
import { useGetPatientInfoQuery, useGetDoctorInfoForPatientQuery, useGrantDoctorAccessMutation } from './patientContractApi';

// Data coming back seems to be a list of addresses for doctor
// Can iterate through list of doctor adresses and get doctor info
// Prefetch getDoctorInfoForPatientQuery

const DoctorRow = ({ ethAddress }) => {
  // TODO: error handling
  const { data: doctorData } = useGetDoctorInfoForPatientQuery({ doctorEthAddress: ethAddress });

  return (
    <>
      {doctorData
        ? (
          <TableRow
            key={ethAddress}
            sx={{ '&:last-child td, &:last-child th': { border: 0 }, textDecoration: 'none' }}
          >
            <TableCell component="th" scope="row">
              {doctorData.name}
            </TableCell>
            <TableCell align="right">{doctorData.clinic}</TableCell>
          </TableRow>
        )
        : <TableRow><TableCell><CircularProgress /></TableCell></TableRow>}
    </>
  );
};

const PatientDoctors = () => {
  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { data } = useGetPatientInfoQuery();

  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  const [doctorAddress, setDoctorAddress] = useState('');

  const [grantDoctorAccess] = useGrantDoctorAccessMutation();

  const tableContent = () => {
    if (data) {
      const { doctorList } = data;
      if (doctorList) {
        return doctorList.map((ethAddress) => <DoctorRow ethAddress={ethAddress} key={ethAddress} />);
      }
    }
    // Temporary, will be replaced with an error component
    return <TableRow><TableCell><CircularProgress /></TableCell></TableRow>;
  };

  const cleanUp = () => {
    setDoctorAddress('');
    setClicked(false);
  };

  const onAuthorizeDoctor = async () => {
    // Grab data
    try {
      setClicked(true);
      if (doctorAddress) {
        await grantDoctorAccess({ doctorEthAddress: doctorAddress });
        cleanUp();
      }
    } catch (err) {
      console.log(err);
    }

    // Validate data

    // make call to blockchain to grantDoctor Permision
    // if successful - update patient doctor list view

    // close Modal
    setOpen(false);
  };

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h1">Doctors</Typography>
        <SearchBar />
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Clinic</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableContent()}
          </TableBody>
        </Table>
      </TableContainer>
      <InfoPopover style={{ marginTop: '15px', marginBottom: '5px' }}>{addDoctorInfo}</InfoPopover>
      <Button onClick={handleOpen} disableElevation disableRipple disableFocusRipple style={btnStyle} sx={{ flexDirection: 'column' }}>
        <AddIcon fontSize="large" />
        <Typography fontWeight="600" variant="button">Add Doctor</Typography>
      </Button>

      {/* Might be cleaner to refactor this into component */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography align="center" id="modal-modal-title" variant="h" component="h2">
            Add Doctor
          </Typography>
          <Box sx={{
            display: 'grid',
            gap: 1,
            gridTemplateColumns: 'repeat(1fr)',
          }}
            component="form"
          >
            {/* <TextField
              size="small"
              margin="normal"
              label="First Name"
              placeholder="First Name"
              value={firstName}
              onChange={(event) => { setFirstName(event.target.value); }}
              fullWidth
              required
            />
            <TextField
              size="small"
              margin="normal"
              label="Last Name"
              placeholder="Last Name"
              value={lastName}
              onChange={(event) => { setLastName(event.target.value); }}
              fullWidth
              required
            /> */}
            <TextField
              size="small"
              margin="normal"
              label="EthAddress"
              placeholder="Eth Address"
              value={doctorAddress}
              onChange={(event) => { setDoctorAddress(event.target.value); }}
              fullWidth
            />
            <Button
              type="button"
              color="primary"
              variant="contained"
              onClick={onAuthorizeDoctor}
              fullWidth
            >Authorize
            </Button>
            <InfoPopover style={{ marginTop: '15px', marginBottom: '5px' }}>{signTransaction}</InfoPopover>
            {clicked && <CircularProgress />}
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default PatientDoctors;

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
