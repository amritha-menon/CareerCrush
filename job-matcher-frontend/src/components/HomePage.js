// HomePage.js
import React, { useState, useEffect } from 'react';
import '../css/HomePage.css';
import logo from '../images/logo.jpeg';
import NavBar from './NavBar';
import Card from 'react-bootstrap/Card';
import WelcomeSection from './WelcomeSection';
import CardComponent from './CardComponent';
import axios from 'axios';

const HomePage = () => {
  const [jobs, setJobs] = useState([]);
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [isDegreeRequired, setIsDegreeRequired] = useState(false);
  const [minSalary, setMinSalary] = useState('');
  const [maxSalary, setMaxSalary] = useState('');
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const technologiesList = [
    'React', 'HTML', 'CSS', 'Python', 'Java', 'JavaScript', 'Web3', 'Blockchain', 'Solidity',
    'SQL', 'MongoDB', 'PostgreSQL', 'Machine Learning', 'AWS', 'Azure', 'GCP', 'TypeScript',
    'Docker', 'Kubernetes'
  ];
  useEffect(() => {
    // Fetch jobs when the component mounts
    fetchJobs();
  }, []);
  const fetchJobs = async () => {
    // e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3000/fetchJobs');
      console.log(response.data.applications);
      setJobs(response.data);
    } catch (error) {
      console.error('Error fetching jobs:', error.message);
    }
  };
  const handleNoClick = () => {
    // Move to the next job
    setCurrentJobIndex((prevIndex) => prevIndex + 1);
  };

  const handleYesClick = () => {
    // Move to the next job
    setCurrentJobIndex((prevIndex) => prevIndex + 1);
  };

  const handleJobTypeChange = (value) => {
    setSelectedJobTypes((prevSelected) => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter((type) => type !== value);
      } else {
        return [...prevSelected, value];
      }
    });
  };

  const handleDegreeChange = () => {
    setIsDegreeRequired((prevValue) => !prevValue);
  };

  // Handle input change for min salary
  const handleMinSalaryChange = (e) => {
    setMinSalary(e.target.value);
  };

  // Handle input change for max salary
  const handleMaxSalaryChange = (e) => {
    setMaxSalary(e.target.value);
  };

  const handleTechnologiesChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedTechnologies(selectedOptions);
  };


  return (
    <div className="h">
      <NavBar />
      <WelcomeSection />
      <div className="filters-container">
          {/* Job Type Filter */}
          <label>
          Job Type:
          <input
            type="checkbox"
            value="Full-time"
            checked={selectedJobTypes.includes('Full-time')}
            onChange={() => handleJobTypeChange('Full-time')}
          />
          Full-time
        </label>
        <label>
          <input
            type="checkbox"
            value="Part-time"
            checked={selectedJobTypes.includes('Part-time')}
            onChange={() => handleJobTypeChange('Part-time')}
          />
          Part-time
        </label>
        <label>
          <input
            type="checkbox"
            value="Internship"
            checked={selectedJobTypes.includes('Internship')}
            onChange={() => handleJobTypeChange('Internship')}
          />
          Internship
        </label>
          {/* Degree Required Filter */}
          <label>
          Degree Required:
          <input
            type="checkbox"
            checked={isDegreeRequired}
            onChange={handleDegreeChange}
          />
          Yes
        </label>

          {/* Min Salary Filter */}
          <label>
          Min Salary:
          <input
            type="number"
            value={minSalary}
            onChange={handleMinSalaryChange}
          />
        </label>

          {/* Max Salary Filter */}
          <label>
          Max Salary:
          <input
            type="number"
            value={maxSalary}
            onChange={handleMaxSalaryChange}
          />
        </label>

          {/* Technologies Filter */}
          <label>
          Technologies:
          <select
            multiple
            value={selectedTechnologies}
            onChange={handleTechnologiesChange}
          >
            {technologiesList.map((tech) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </label>
        </div>
      <div className='home-page'>
      

        {currentJobIndex < jobs.length ? (
          <div className='swipe'>
       
            <div className="buttons-container">
              <button className="no-button"  onClick={handleNoClick}>X</button>
            </div>
            <div className="card-container">
              <CardComponent job={jobs[currentJobIndex]}/>
            </div>
            <div className="buttons-container">
              <button className="yes-button"  onClick={handleYesClick}>✔</button>
            </div>
          </div>
        ) : (
          
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={logo} style={{ maxWidth: '100%', height: 'auto' }} />
            <Card.Body>
             <p> No more jobs available. </p> 
            </Card.Body>
          </Card>
        )}
        </div>
    </div>
  );
};

export default HomePage;
