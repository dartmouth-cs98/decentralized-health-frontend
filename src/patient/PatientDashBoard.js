import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Toolbar from '@mui/material/Toolbar';
import Header from '../common/Header';

const drawerWidth = 250;

const PatientDashboard = (props) => {
  // TODO: update routes
  const drawerItems = {
    Home: { link: '', icon: <HomeIcon /> },
    Allergies: { link: '/patient/Allergies', icon: <PersonIcon /> },
    'Blood Tests': { link: '/patient/blood-tests', icon: <BloodtypeIcon /> },
    Procedures: { link: '/patient/procedures', icon: <MenuBookIcon /> },
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
      <Header />
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
  );
};

export default PatientDashboard;
