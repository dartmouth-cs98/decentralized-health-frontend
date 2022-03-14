import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { useDispatch } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import PersonIcon from '@mui/icons-material/Person';
import LogoutOutlined from '@mui/icons-material/LogoutOutlined';
import PrivacyTipOutlined from '@mui/icons-material/PrivacyTipOutlined';
import {
  tourStarted, stepUpdated,
} from '../joyride/tourSlice';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

const UserMenu = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const location = useLocation();

  const startTour = () => {
    dispatch(tourStarted());
    if (location.pathname.includes('/signup')) {
      navigate('/signup');
      dispatch(stepUpdated(4));
    } else if (location.pathname.includes('/admin')) {
      navigate('/admin');
      dispatch(stepUpdated(15));
    } else if (location.pathname.includes('/patient')) {
      navigate('/patient');
      dispatch(stepUpdated(9));
    }
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleViewToggle = () => {
    if (props.isAdmin) {
      navigate('/patient');
    } else if (props.isPatient) {
      navigate('/admin');
    }
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="tour-start"
        onClick={startTour}
        color="primary"
        variant="contained"
        sx={{ mr: 4, mt: 0, width: '12em' }}
      >Resume tour
      </Button>
      <Button
        id="demo-customized-button"
        disableRipple
        aria-label="display more actions"
        endIcon={<KeyboardArrowDownOutlinedIcon />}
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        disableElevation
        onClick={handleClick}
      > {props.name ?? ''}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleViewToggle} disableRipple>
          <PersonIcon />
          {props.isAdmin ? 'Patient View' : 'Admin View'}
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <PrivacyTipOutlined />
          Privacy
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <LogoutOutlined />
          Logout
        </MenuItem>
      </StyledMenu>
    </div>
  );
};

export default UserMenu;
