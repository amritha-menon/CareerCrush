// src/components/LandingPage.js

import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../css/LandingPage.css'; // Import the CSS file for styling
import CareerCrushLogo from '../images/logo.jpeg';
const LandingPage = () => {
    const navigate = useNavigate(); 

    const handleSignUpClick = () => {
    // Navigate to the Sign Up page
    navigate('/signup');
  };
    const handleSignInClick = () => {
        // Navigate to the Sign Up page
        navigate('/signin');
    };
  return (
    <div className="landing-page">
      <div className="logo-container">
        <img src={CareerCrushLogo} alt="Career Crush Logo" className="logo" />
      </div>
      <div className="description">
        <h1 id='tagline'>A Gateway to Exciting Remote Tech Opportunities!</h1>
        <p> A unique way to connect job seekers and hiring companies. </p>
        <p>Job seeking can be tough, but don't worry – we've got your back!</p>
        <p>Career Crush will match you with the best remote tech jobs. Just swipe right, and employers will see your profile!</p>
        <p>Get direct access to companies and increase your chances of having your resume viewed.</p>
        <h1 id='tagline'>Let's get you matched up!</h1>
      </div>
      <div className="cta-buttons">
        <button className="login-button" onClick={handleSignInClick}>Login</button>
        <button className="signup-button" onClick={handleSignUpClick}>Sign Up</button>
      </div>
      <br/>
    </div>
  );
};

export default LandingPage;
