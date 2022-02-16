import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 1,
  p: 4,
  outline: 0,
};

const textAreaStyle = {
  width: '100%',
  height: 'fit-content',
  padding: '12px 20px',
  boxSizing: 'border-box',
  border: '2px solid #ccc',
  borderRadius: '4px',
  backgroundColor: '#f8f8f8',
  maxHeight: '350px',
  overflowY: 'auto',
};

export default function FileModal({
  data, open, handleClose,
}) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography fontWeight="bold" marginBottom="0.25em" id="modal-modal-title" variant="h2" color="primary">
          Patient Record
        </Typography>
        <Divider light />
        <Box sx={{
          display: 'grid',
          gap: 1,
          gridTemplateColumns: '2fr 4fr 2fr 4fr',
          alignItems: 'flex-end',
          marginTop: 3,
        }}
          component="form"
        >
          <Typography fontSize="small" fontWeight="bold">File Name</Typography>
          <Typography fontSize="small">{data.file_name}</Typography>
          <Typography fontSize="small" fontWeight="bold">File Type</Typography>
          <Typography fontSize="small">{data.record_type}</Typography>
          <Typography fontSize="small" fontWeight="bold">Date Uploaded</Typography>
          <Typography fontSize="small">{data.date_uploaded}</Typography>
          <Typography fontSize="small" fontWeight="bold">Name of uploader</Typography>
          <Typography fontSize="small">{data.uploader_name}</Typography>
        </Box>
        <Typography fontSize="small" fontWeight="bold" marginTop={3.5} marginBottom={1}>Results</Typography>
        <Typography fontSize="small" style={textAreaStyle}>{`${data.contents}`}
        </Typography>
      </Box>
    </Modal>
  );
}
