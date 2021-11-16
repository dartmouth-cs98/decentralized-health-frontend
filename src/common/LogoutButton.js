import React from 'react';
import { Button } from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const LogoutButton = (props) => (
  <Button
    aria-label="display more actions"
    endIcon={<KeyboardArrowDownOutlinedIcon />}
  > {props.userName ?? 'John Steinway'}
    {/* TODO:  */}
  </Button>
);

export default LogoutButton;
