import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import LogoutButton from './LogoutButton';

import { ReactComponent as LogoIcon } from '../icons/AppLogo.svg';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  '@media all': {
    maxHeight: 32,
  },
  backgroundColor: '#FAFAFA',
}));

export default function Header(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" elevation={0}>
        <StyledToolbar>
          <LogoIcon />
          <Box sx={{ flexGrow: 1 }} />
          {props.userName ? <LogoutButton name={props.userName} /> : '' }
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
