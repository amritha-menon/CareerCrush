// HomePage.js

import React from 'react';
import '../css/HomePage.css';
import NavBar from './NavBar';
import WelcomeSection from './WelcomeSection';
import CardComponent from './CardComponent';
import axios from 'axios';
const HomePage = () => {

  const handleJobs = async () => {
    // e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3000/fetchJobs');
      console.log(response.data);
      // setJobs(response.data);
    } catch (error) {
      console.error('Error fetching jobs:', error.message);
    }
  };
  return (
    <div className="h">
      <NavBar />
      <WelcomeSection />
      <button className='see-jobs-button' onClick={handleJobs}>
        See jobs
      </button>
      <div className='home-page'>
        <div className="buttons-container">
          <button className="no-button">X</button>
        </div>
        <div className="card-container">
          <CardComponent/>
        </div>
        <div className="buttons-container">
          <button className="yes-button">✔</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
