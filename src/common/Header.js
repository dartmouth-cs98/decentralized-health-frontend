import * as React from 'react';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { useLocation } from 'react-router-dom';
import UserMenu from './UserMenu';
import { ReactComponent as LogoIcon } from '../icons/AppLogo.svg';
import { useGetAdminInfoQuery } from '../admin/adminContractApi';
import { useGetPatientInfoQuery } from '../patient/patientContractApi';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  '@media all': {
    maxHeight: 32,
  },
  backgroundColor: '#FAFAFA',
}));

export default function Header() {
  const location = useLocation();
  const isAdmin = location.pathname.includes('admin');
  const isPatient = location.pathname.includes('patient');
  const { data: patientData, isFetching: patientFetching } = useGetPatientInfoQuery();
  const { data: adminData, isFetching: adminFetching } = useGetAdminInfoQuery();

  useEffect(() => {
    // do nothing
  }, [patientFetching, patientData, adminData, adminFetching]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" elevation={0}>
        <StyledToolbar>
          <LogoIcon />
          <Box sx={{ flexGrow: 1 }} />
          {(isAdmin && adminData && <UserMenu name={adminData.name} isAdmin />)
          || (isPatient && patientData && <UserMenu name={patientData.name} isPatient />)}
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
