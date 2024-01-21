import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserProfileMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate(); 

  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    console.log('here');
    navigate('/');
  }



  return (
    <div>
      <IconButton
        size="large"
        edge="end"
        color="inherit"
        aria-label="user profile"
        aria-controls="user-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Avatar>S</Avatar> {/* Replace 'A' with user's initials */}
      </IconButton>
      <Menu
        id="user-menu"
        style={{fontFamily: 'Josefin Sans'}}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {/* <MenuItem onClick={handleSavedJobsClick}><Typography variant="h6" style={{fontFamily: 'Josefin Sans'}}>Applied Jobs</Typography></MenuItem> */}
        {/* <MenuItem onClick={handleMatchedJobsClick}><Typography variant="h6" style={{fontFamily: 'Josefin Sans'}}>Matched Jobs</Typography></MenuItem> */}
        <MenuItem onClick={handleSignOut}><Typography variant="h6" style={{fontFamily: 'Josefin Sans'}}>Sign Out</Typography></MenuItem>

      </Menu>

      
      </div>
    
  );
};

export default UserProfileMenu;
