// src/components/SignIn.js
import axios from 'axios';
import React, { useState } from 'react';
import '../css/SignIn.css';
import { useNavigate } from 'react-router-dom'; 
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const SignIn = () => {
  const navigate = useNavigate(); 
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make an API request to your backend for user authentication
      const response = await axios.post('http://localhost:3000/login', {
        email: email,
        password: password,
      });
      if (response.status === 200) {
        const { user_id } = response.data;
        localStorage.setItem('user_id', user_id);
        setOpenSnackbar(true);
        setTimeout(() => {
          navigate('/home');
        }, 3000);
      } else {
        console.error('Authentication failed:', response.data.error);
      }
      setEmail('');
      setPassword('');
    } catch (error) {
      // Handle network errors or other issues
      console.error('Error during login:', error.message);
      // Display an error message to the user
    }
  
  };

  return (
    <div className='main-sign-in'>
      <div className='heading'>
        <h2>Welcome back! Sign in to continue</h2>
      </div>
      <div className='sign-in-container'>
        <form onSubmit={handleSubmit} className='form-sign-in'>
          <div className='form-group'>
            <label>
              Email:
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className='form-group'>
            <label>
              Password:
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div className='form-group'>
            <div className='button-sign-in'>
              <button type='submit'>Sign In</button>
            </div>
          </div>
        </form>
        <p className='new-to-platform'>
          New to Career Crush? <a href='/signup'>Sign up</a>
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
        Login successful!
      </MuiAlert>
    </Snackbar>
    </div>
  );
};

export default SignIn;
