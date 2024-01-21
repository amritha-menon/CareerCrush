// src/components/NavBar.js

import React from 'react';
import AppBar from '@mui/material/AppBar';
import {Toolbar} from '@mui/material';
import {Typography} from '@mui/material';
import EmployeeProfile from './EmployeeProfile';


const NavBar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#5782bb', width: '100%' }} className="nav-bar-app">
      <Toolbar className='nav-bar-tool'>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Josefin Sans', color: '#111111'}} className='nav-bar-typo'>
          Career Crush
        </Typography>
        <EmployeeProfile />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
