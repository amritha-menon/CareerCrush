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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [savedJobs, setSavedJobs] = useState([]);
  const [isMatchModalOpen, setIsMatchModalOpen] = useState(false);
  const [matchedJobs, setMatchedJobs] = useState([]);
  const navigate = useNavigate(); 

  const style = {

    top: '20%',
    left: '35%',
    width: 400,
    bgcolor: '#5782bb;',
    border: '2px solid #000',
    boxShadow: 24,
    height: '60vh',
    p: 4,
  };

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

  const handleSavedJobsClick = async () => {
    const user_id = localStorage.getItem('user_id');
    try {
      const response = await axios.get(`http://localhost:3000/savedJobs/userID?user_id=${user_id}`);
      console.log(response.data);
      setSavedJobs(response.data);
      setIsModalOpen(true);
      handleClose(); // Close the menu when modal opens
    } catch (error) {
      console.error('Error fetching saved jobs:', error.message);
    }
  };

  const handleMatchedJobsClick = async () => {
    const user_id = localStorage.getItem('user_id');
    try {
      const response = await axios.get(`http://localhost:3000/matchedJobs/userID?user_id=${user_id}`);
      console.log(response.data);
      setMatchedJobs(response.data);
      setIsMatchModalOpen(true);
      handleClose(); // Close the menu when modal opens
    } catch (error) {
      console.error('Error fetching saved jobs:', error.message);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseMatchModal = () => {
    setIsMatchModalOpen(false);
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
        style={{fontFamily: 'Josefin Sans'}}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleSavedJobsClick}><Typography variant="h6" style={{fontFamily: 'Josefin Sans'}}>Applied Jobs</Typography></MenuItem>
        <MenuItem onClick={handleMatchedJobsClick}><Typography variant="h6" style={{fontFamily: 'Josefin Sans'}}>Matched Jobs</Typography></MenuItem>
        <MenuItem onClick={handleSignOut}><Typography variant="h6" style={{fontFamily: 'Josefin Sans'}}>Sign Out</Typography></MenuItem>

      </Menu>

      {/* Modal for Saved Jobs */}
      
      <Modal open={isModalOpen} onClose={handleCloseModal} slots={{ backdrop: Backdrop }} sx={style}>
      <div
    style={{
      overflowY: 'auto', // Enable vertical scrolling
      maxHeight: '60vh',
      fontFamily: 'Josefin Sans',
    }}
  >
        <div style={{ margin: '16px', maxWidth: '400px' }}>
          <Typography variant="h6" style={{fontFamily: 'Josefin Sans'}}>Applied Jobs</Typography>
          <List>
            {savedJobs.map((job) => (
              <ListItem key={job._id} style={{fontFamily: 'Josefin Sans'}}>
                {/* <ListItemAvatar>
                  <Avatar> # </Avatar>
                </ListItemAvatar> */}
                <ListItemText
                  primary={job.title}
                  secondary={`${job.company}`}
                  style={{fontFamily: 'Josefin Sans'}}
                />
              </ListItem>
            ))}
          </List>
        </div>
        </div>
        
      </Modal>
      <Modal open={isMatchModalOpen} onClose={handleCloseMatchModal} slots={{ backdrop: Backdrop }} sx={style}>
      <div
    style={{
      overflowY: 'auto', // Enable vertical scrolling
      maxHeight: '60vh',
      fontFamily: 'Josefin Sans',
    }}
  >
        <div style={{ margin: '16px', maxWidth: '400px' }}>
          <Typography variant="h6" style={{fontFamily: 'Josefin Sans'}}>Matched Jobs</Typography>
          <Typography variant="h6" style={{fontFamily: 'Josefin Sans'}}> Congrats on your matches! The recruiter will contact you via email!</Typography>
          <List>
            {matchedJobs.map((job) => (
              <ListItem key={job._id} style={{fontFamily: 'Josefin Sans'}}>
                {/* <ListItemAvatar>
                  <Avatar> # </Avatar>
                </ListItemAvatar> */}
                <ListItemText
                  primary={job.title}
                  secondary={`${job.company}`}
                  style={{fontFamily: 'Josefin Sans'}}
                />
              </ListItem>
            ))}
          </List>
        </div>
        </div>
        
      </Modal>
      </div>
    
  );
};

export default UserProfileMenu;
