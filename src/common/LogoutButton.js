import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';

const LogoutButton = (props) => (
  <Button
    size="large"
    aria-label="display more actions"
    color="inherit"
    sx={{ alignSelf: 'flex-start', ml: 1 }}
    startIcon={<LogoutIcon />}
  >Logout
  </Button>
);

export default LogoutButton;
