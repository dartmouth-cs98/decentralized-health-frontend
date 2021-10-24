import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
import SearchBar from '../common/SearchBar';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'center',
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 32,
  },
}));

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 3 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            align="left"
            variant="h4"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
            }}
          >
            Good Morning Hardy!
          </Typography>
          <SearchBar />
          <Button
            size="large"
            aria-label="display more actions"
            color="inherit"
            sx={{ alignSelf: 'flex-start', ml: 1 }}
            startIcon={<LogoutIcon />}
          >Logout
          </Button>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
