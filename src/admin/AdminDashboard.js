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
import Fab from '@mui/material/Fab';
import Toolbar from '@mui/material/Toolbar';
import AddIcon from '@mui/icons-material/Add';
import { Button, Typography } from '@mui/material';
import Header from '../common/Header';

const drawerWidth = 250;

const AdminDashboard = (props) => {
  const drawerItems = {
    Home: { link: '', icon: <HomeIcon /> },
    Patients: { link: '/admin/patients', icon: <PersonIcon /> },
    'Blood Tests': { link: '/admin/blood-tests', icon: <BloodtypeIcon /> },
    Procedures: { link: '/admin/procedures', icon: <MenuBookIcon /> },
    Physicals: { link: '/admin/physicals', icon: <FolderOpenIcon /> },
  };

  const listItems = Object.keys(drawerItems).map((text) => (
    <ListItem sx={{ mt: 2.5 }} button key={text} component={Link} to={drawerItems[text].link}>
      <ListItemIcon>
        {drawerItems[text].icon}
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  ));

  const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  };

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

          {/* TODO: Modularize FAB */}
          <Button style={style} sx={{ flexDirection: 'column' }} component={Link} to="/admin/allergies/add">
            <Fab size="small" color="white" aria-label="add">
              <AddIcon />
            </Fab>
            <Typography variant="button">Add Record</Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default AdminDashboard;
