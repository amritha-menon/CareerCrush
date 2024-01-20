// src/components/UserRegistrationPage.js

import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import React, { useState } from 'react';
import '../css/SignUp.css';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const SignUp = () => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate(); 
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('here');
    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/user', {
        first_name,
        last_name,
        email,
        password
      });
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      console.log(response.data);
      const {user_id} = response.data;
      localStorage.setItem('user_id', user_id);
      setOpenSnackbar(true);
      setTimeout(() => {
        navigate('/home');
    }, 3000); 
    } catch (error) {
      console.error('Error creating user', error.message);
    }

    

    
    
  };

  return (
    <div className='main-sign-up'>
      <div className='heading'>
        <h2> Welcome! Sign Up to find your dream career!</h2>
        <h2> Please enter your details. </h2>
      </div>
      
    <div className='sign-up-container'>
      
      <form onSubmit={handleSubmit} className='form-sign-up'>
      <div className="form-group">
        <label>
          First Name:
          <input type="text" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
        </label>
      </div>
      <div className="form-group">
        <label>
          Last Name:
          <input type="text" value={last_name} onChange={(e) => setLastName(e.target.value)} />
        </label>
      </div>
      <div className="form-group">
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
      </div>
      <div className="form-group">
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
      </div>
      <div className="form-group">
        <label>
          Confirm Password:
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </label>
      </div>
      <div className="form-group">
        <div className='button-sign-up'>
          <button type="submit"> Sign Up</button>
        </div>
        </div>
      </form>
      <p className='already-have-account'>
        Already have an account? <a href="/signin">Sign in</a>
      </p>
    </div>
    <Snackbar
      open={openSnackbar}
      autoHideDuration={6000}
      onClose={handleCloseSnackbar}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={handleCloseSnackbar}
        severity="success"
      >
        Sign up successful!
      </MuiAlert>
    </Snackbar>
    </div>
  );
};

export default SignUp;
