import React from 'react';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

// It isn't possible to programmatically disconnect from a wallet. The user has to do it themselves
// Add this information to walkthrough
const LogoutButton = (props) => {
  return (
    <Button
      aria-label="display more actions"
      endIcon={<LogoutIcon />}
    > DISCONNECT
    </Button>
  );
};

export default LogoutButton;
