// HomePage.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../css/HomePage.css';
import logo from '../images/logo.jpeg';
import NavBar from './NavBar';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import CardComponentEmployee from './CardComponentEmployee';

const HomePageEmployee = () => {
    const [applicants, setApplicants] = useState([]);
    const [currentApplicantIndex, setCurrentApplicantIndex] = useState(0);
    const location = useLocation();
    const { user_id } = location.state || {};
 
  useEffect(() => {
    fetchApplicants();
  }, []);
  const fetchApplicants = async () => {
    // e.preventDefault();
    try {
      const user = await axios.get(`http://localhost:3000/user?user_id=${user_id}`);
      const response = await axios.get(`http://localhost:3000/savedJobs/company?company=${user.data.employerCompany}`);
      console.log(response.data);
      setApplicants(response.data);
    } catch (error) {
      console.error('Error fetching jobs:', error.message);
    }
  };
  const handleNoClick = () => {
    // Move to the next job
    setCurrentApplicantIndex((prevIndex) => prevIndex + 1);
  };

  const handleYesClick = async () => {
    // Move to the next job
    setCurrentApplicantIndex((prevIndex) => prevIndex + 1);
    const user_id = localStorage.getItem('user_id');

  // Get the current job data
    const currentApplicant = applicants[currentApplicantIndex];

    try {
      // Send a POST request to matchedJobs
      await axios.post('http://localhost:3000/matchedJobs', {
        job_id: currentApplicant.job_id,
        title: currentApplicant.title,
        compnay: currentApplicant.company,
      }, {
        params: {
          user_id,
        },
      });
    } catch (error) {
      console.error('Error saving job:', error.message);
    }
  };

  return (
    <div className="h">
      <NavBar />
      <div style={{ textAlign: 'center', paddingTop: '40px' }}><h2 style={{ fontFamily: 'Josefin Sans'}}>Get Matched to most desired job seekers!</h2></div>
      <div style={{padding: '100px', marginTop: '50px'}}>
        {currentApplicantIndex < applicants.length ? (
          <div className='swipe'>
            <div className="buttons-container">
              <button className="no-button" onClick={handleNoClick}>X</button>
            </div>
            <div className="card-container">
              <CardComponentEmployee applicant={applicants[currentApplicantIndex]} />
            </div>
            <div className="buttons-container">
              <button className="yes-button" onClick={handleYesClick}>✔</button>
            </div>
          </div>
        ) : (
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={logo} style={{ maxWidth: '100%', height: 'auto' }} />
            <Card.Body>
              <p>No more jobs available.</p>
            </Card.Body>
          </Card>
        )}
      </div>
    </div>
  );
};

export default HomePageEmployee;
