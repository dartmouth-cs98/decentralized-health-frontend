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

const drawerWidth = 240;

const AdminDashboard = (props) => {
  const drawerItems = {
    Home: { link: '', icon: <HomeIcon /> },
    Patients: { link: '/admin/patients', icon: <PersonIcon /> },
    'Blood Tests': { link: '/admin//blood-tests', icon: <BloodtypeIcon /> },
    Procedures: { link: '/admin/procedures', icon: <MenuBookIcon /> },
    Physicals: { link: '/admin/physicals', icon: <FolderOpenIcon /> },
  };

  const listItems = Object.keys(drawerItems).map((text) => (
    <ListItem button key={text} component={Link} to={drawerItems[text].link}>
      <ListItemIcon>
        {drawerItems[text].icon}
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  ));

  return (
    <>
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
          <List>
            {listItems}
          </List>
          <Divider />
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default AdminDashboard;
