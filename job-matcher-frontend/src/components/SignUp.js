// src/components/UserRegistrationPage.js

import React, { useState } from 'react';
import '../css/SignUp.css';
const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    // Perform form submission logic (e.g., send data to backend)

    // Reset form fields after submission
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
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
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
      </div>
      <div className="form-group">
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
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
    </div>
  );
};

export default SignUp;
