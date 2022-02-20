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
import { useGetAdminInfoQuery } from './adminContractApi';
import { ReactComponent as BloodTestIcon } from '../icons/Bloodtest.svg';
import { ReactComponent as MedicalHistoryIcon } from '../icons/MedicalHistory.svg';
import { ReactComponent as ProcedureIcon } from '../icons/Procedures.svg';
import { ReactComponent as HomeIcon } from '../icons/Home.svg';
import { ReactComponent as PatientIcon } from '../icons/Patient.svg';

const drawerWidth = 250;

const AdminDashboard = (props) => {
  const { data: doctorData, isFetching: doctorFetching } = useGetAdminInfoQuery();

  useEffect(() => {
    // do nothing
  }, [doctorFetching, doctorData]);

  const drawerItems = {
    Home: { link: '', icon: <HomeIcon /> },
    Patients: { link: '/admin/patients', icon: <PatientIcon /> },
    'Blood Tests': { link: '/admin/files/blood-tests', icon: <BloodTestIcon /> },
    Procedures: { link: '/admin/files/procedures', icon: <ProcedureIcon /> },
    'Medical History': { link: '/admin/files/medical-history', icon: <MedicalHistoryIcon /> },
  };

  const listItems = Object.keys(drawerItems).map((text) => (
    <ListItem sx={{ mt: 2.5 }} button key={text} component={Link} to={drawerItems[text].link}>
      <ListItemIcon>
        {drawerItems[text].icon}
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  ));

  return (
    <>
      {
        (doctorFetching && (
          <Box sx={{ display: 'flex', margin: '50px' }}>
            <AwaitingTransaction message="Authenticating... Please make sure you are signed into your wallet." />
          </Box>
        ))
        || (!doctorFetching && !doctorData && (<Navigate to="/login" />))
        || (doctorData && (
        <>
          <Header isAdmin="abc" />
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

export default AdminDashboard;
