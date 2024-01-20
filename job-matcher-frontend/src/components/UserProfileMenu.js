// src/components/UserProfileMenu.js

import React from 'react';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import UserPreferencesModal from './UserPreferencesModal';

const UserProfileMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUserPreferences = () => {
    setModalOpen(true);
    handleClose();
  };

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
        <Avatar>A</Avatar> {/* Replace 'A' with user's initials */}
      </IconButton>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleUserPreferences}>User Preferences</MenuItem>
        <MenuItem>Saved Jobs</MenuItem>
        <MenuItem>Sign Out</MenuItem>
      </Menu>
      <UserPreferencesModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default UserProfileMenu;
