// src/components/SignIn.js

import React, { useState } from 'react';
import '../css/SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform sign-in logic (e.g., send data to backend)

    // Reset form fields after submission
    setEmail('');
    setPassword('');
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
    </div>
  );
};

export default SignIn;
