import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
// import LogoutButton from './LogoutButton';
import UserMenu from './UserMenu';
import { ReactComponent as LogoIcon } from '../icons/AppLogo.svg';
// import { useGetPatientInfoQuery } from '../patient/patientContractApi';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  '@media all': {
    maxHeight: 32,
  },
  backgroundColor: '#FAFAFA',
}));

export default function Header(props) {
  // const { data } = useGetPatientInfoQuery();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" elevation={0}>
        <StyledToolbar>
          <LogoIcon />
          <Box sx={{ flexGrow: 1 }} />
          {/* {data ? <LogoutButton name={data.name} /> : '' } */}
          <UserMenu isAdmin={props.isAdmin} />
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
