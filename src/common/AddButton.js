import React from 'react';
import { Link } from 'react-router-dom';
// import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';

const style = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
};

const AddButton = (props) => {
  return (
    <Button disableElevation="true" disableRipple="true" disableFocusRipple="true" style={style} sx={{ flexDirection: 'column' }} component={Link} to={props.to}>
      <AddIcon fontSize="large" />
      <Typography fontWeight="600" variant="button">Add Record</Typography>
    </Button>
  );
};

export default AddButton;
