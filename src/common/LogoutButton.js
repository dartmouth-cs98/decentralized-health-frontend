import React from 'react';
import { Button } from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const LogoutButton = (props) => (
  <Button
    disableRipple
    aria-label="display more actions"
    endIcon={<KeyboardArrowDownOutlinedIcon />}
  > {props.name ?? ''}
  </Button>
);

export default LogoutButton;
