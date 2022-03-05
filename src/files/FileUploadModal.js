import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useAddFileToPatientMutation } from '../admin/adminContractApi';
import CustomSpinner from '../common/CustomSpinner';

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

const FileUploadModal = ({ handleClose, open }) => {
  const [fileType, setFileType] = useState('');
  const [fileContents, setFileContents] = useState('');
  const [file, setFile] = useState(null);
  const [clicked, setClicked] = useState(false);
  const { ethAddress } = useParams();
  const [addFileToPatient, result] = useAddFileToPatientMutation();

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
      const dateUploaded = new Date().toISOString().split('T')[0];
      await addFileToPatient({
        fileName: file.name, fileType, patientEthAddress: ethAddress, fileContents, dateUploaded,
      });
      if (!result.isLoading) {
        cleanUp();
        handleClose();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
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
  );
};

export default FileUploadModal;
