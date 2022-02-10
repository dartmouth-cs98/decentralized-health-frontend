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
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import Toolbar from '@mui/material/Toolbar';
import Header from '../common/Header';

const drawerWidth = 250;

const AdminDashboard = (props) => {
  const drawerItems = {
    Home: { link: '', icon: <HomeIcon /> },
    Patients: { link: '/admin/patients', icon: <PersonIcon /> },
    'Blood Tests': { link: '/admin/blood-tests', icon: <BloodtypeIcon /> },
    Procedures: { link: '/admin/procedures', icon: <MenuBookIcon /> },
    Allergies: { link: '/admin/allergies', icon: <FolderOpenIcon /> },
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
      <Header isAdmin />
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

export default AdminDashboard;
