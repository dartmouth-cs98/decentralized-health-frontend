import React, { useEffect } from 'react';
import { Outlet, Link, Navigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Header from '../common/Header';
import AwaitingTransaction from '../common/AwaitingTransaction';
import { useGetPatientInfoQuery } from './patientContractApi';
import { ReactComponent as BloodTestIcon } from '../icons/Bloodtest.svg';
import { ReactComponent as DoctorIcon } from '../icons/Doctor.svg';
import { ReactComponent as MedicalHistoryIcon } from '../icons/MedicalHistory.svg';
import { ReactComponent as ProcedureIcon } from '../icons/Procedures.svg';
import { ReactComponent as FilesIcon } from '../icons/Files.svg';
import { ReactComponent as HomeIcon } from '../icons/Home.svg';

const drawerWidth = 250;

const PatientDashboard = (props) => {
  const { data: patientData, isFetching: patientFetching } = useGetPatientInfoQuery();

  useEffect(() => {
  }, [patientFetching, patientData]);

  // TODO: update routes
  const drawerItems = {
    Home: { link: '', icon: <HomeIcon /> },
    Files: { link: '/patient/files', icon: <FilesIcon />, id: 'tour-files' },
    Doctors: { link: '/patient/doctors', icon: <DoctorIcon />, id: 'tour-doctors' },
    'Medical History': { link: '/patient/files/medical-history', icon: <MedicalHistoryIcon />, id: 'tour-med-history' },
    'Blood Tests': { link: '/patient/files/blood-tests', icon: <BloodTestIcon />, id: 'tour-blood-tests' },
    Procedures: { link: '/patient/files/procedures', icon: <ProcedureIcon />, id: 'tour-procedures' },
  };

  const listItems = Object.keys(drawerItems).map((text) => (
    <ListItem sx={{ mt: 2.5 }} button key={text} component={Link} to={drawerItems[text].link} id={drawerItems[text].id}>
      <ListItemIcon>
        {drawerItems[text].icon}
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  ));

  return (
    <>
      {
        (patientFetching && (
          <Box sx={{ display: 'flex', margin: '50px' }}>
            <AwaitingTransaction message="Authenticating... Please make sure you are signed into your wallet." />
          </Box>
        ))
        || (!patientFetching && !patientData && (<Navigate to="/login" />))
        || (patientData && (
        <>
          <Header isAdmin={false} />
          <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: drawerWidth,
                  boxSizing: 'border-box',
                },
              }}
              variant="permanent"
              anchor="left"
            >
              <List sx={{ mt: 8 }}>
                {listItems}
              </List>
              <Divider />
              <Header />
            </Drawer>
            <Box
              component="main"
              sx={{
                flexGrow: 1, bgcolor: 'background.default', p: 3, ml: 5,
              }}
            >
              <Toolbar />
              <Outlet />
            </Box>
          </Box>
        </>
        ))
      }
    </>
  );
};

export default PatientDashboard;
