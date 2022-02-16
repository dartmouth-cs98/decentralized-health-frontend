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
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import CustomSpinner from '../common/CustomSpinner';
import Error from '../common/Error';
import SearchBar from '../common/SearchBar';
import EmptyState from '../common/EmptyState';
import InfoPopover from '../common/InfoPopover';
import { addDoctorInfo, signTransaction } from '../common/InfoText';
import {
  useGetPatientInfoQuery, useGetDoctorInfoForPatientQuery, useGrantDoctorAccessMutation, useRevokeDoctorAccessMutation,
} from './patientContractApi';
// This is hardcoded due to the smart contract's read restrictions
// Note, this is also breaking invalidates tags when one revoked doctor is granted access again
// as data stays the same
const REVOKED_DOCTOR_ERROR = 'Error: Your request got reverted with the following reason string: doctor does not exist (get doctor for patient)';

const DoctorRow = ({ ethAddress }) => {
  const { data: doctorData, error } = useGetDoctorInfoForPatientQuery({ doctorEthAddress: ethAddress });
  const [revokeDoctorAccess] = useRevokeDoctorAccessMutation();

  const onRevokeDoctorAccess = async () => {
    try {
      if (ethAddress) {
        await revokeDoctorAccess({ doctorEthAddress: ethAddress });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {(doctorData
        && (
          <TableRow
            key={ethAddress}
            sx={{ '&:last-child td, &:last-child th': { border: 0 }, textDecoration: 'none' }}
          >
            <TableCell component="th" scope="row">
              {doctorData.name}
            </TableCell>
            <TableCell align="right">{doctorData.clinic}</TableCell>
            <TableCell align="right">
              <Button onClick={onRevokeDoctorAccess}>Revoke access</Button>
            </TableCell>
          </TableRow>
        ))
        || (error && error === REVOKED_DOCTOR_ERROR && <TableRow><TableCell><DoNotDisturbAltIcon /></TableCell></TableRow>)
        || (error && <TableRow><TableCell><Error message={error} /></TableCell></TableRow>)
        || <TableRow><TableCell><CustomSpinner /></TableCell></TableRow>}
    </>
  );
};

const PatientDoctors = () => {
  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { data, error } = useGetPatientInfoQuery();

  const [doctorAddress, setDoctorAddress] = useState('');

  const [grantDoctorAccess] = useGrantDoctorAccessMutation();

  const tableContent = () => {
    if (data) {
      const { doctorList } = data;
      if (doctorList) {
        return doctorList.map((ethAddress) => <DoctorRow ethAddress={ethAddress} key={ethAddress} />);
      }
    } else if (error) {
      return <TableRow><TableCell><Error message={error} /></TableCell></TableRow>;
    }
    return <TableRow><TableCell><CustomSpinner /></TableCell></TableRow>;
  };

  const cleanUp = () => {
    setDoctorAddress('');
    setClicked(false);
  };

  const onAuthorizeDoctor = async () => {
    try {
      setClicked(true);
      if (doctorAddress) {
        await grantDoctorAccess({ doctorEthAddress: doctorAddress });
        cleanUp();
      }
    } catch (err) {
      console.log(err);
    }

    setOpen(false);
  };

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h1">Doctors</Typography>
        <SearchBar />
      </Box>
      <InfoPopover style={{ marginTop: '15px', marginBottom: '5px' }}>{addDoctorInfo}</InfoPopover>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="List of authorized doctors">
          <TableHead>
            <TableRow>
              <TableCell><Typography fontSize="small" fontWeight="bold">Name</Typography></TableCell>
              <TableCell><Typography fontSize="small" fontWeight="bold">Clinic</Typography></TableCell>
              <TableCell><Typography fontSize="small" fontWeight="bold">Contact</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableContent()}
          </TableBody>
        </Table>
      </TableContainer>
      { data && data.doctorList && data.doctorList.length === 0
        ? <EmptyState title="No Doctors authorized to view your records" />
        : ''}
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
            {clicked && <CustomSpinner />}
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
