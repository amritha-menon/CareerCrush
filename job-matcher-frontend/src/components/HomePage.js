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

  const handleYesClick = async () => {
    // Move to the next job
    setCurrentJobIndex((prevIndex) => prevIndex + 1);
    const user_id = localStorage.getItem('user_id');

  // Get the current job data
    const currentJob = jobs[currentJobIndex];

    try {
      // Send a POST request to save the job
      console.log(currentJob.id,currentJob.title,currentJob.company,currentJob.min_salary_usd,currentJob.max_salary_usd);
      console.log(currentJob.location_iso, currentJob.job_type, currentJob.degree_required,  currentJob.url, currentJob.technologies);
      await axios.post('http://localhost:3000/savedJobs', {
        job_id: currentJob.id,
        title: currentJob.title,
        company: currentJob.company,
        min_salary_usd: currentJob.min_salary_usd,
        max_salary_usd: currentJob.max_salary_usd,
        location_iso: currentJob.location_iso,
        job_type: currentJob.job_type,
        degree_required: currentJob.degree_required,
        url: currentJob.url,
        technologies: currentJob.technologies ? currentJob.technologies.join(',') : null, // Convert array to comma-separated string
        image_url: currentJob.image_url,
      }, {
        params: {
          user_id,
        },
      });

    } catch (error) {
      console.error('Error saving job:', error.message);
      // Handle the error, show a notification, or provide feedback to the user.
    }
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

  const fetchFilteredJobs = async () => {
    console.log('here');
    try {
      const response = await axios.get('http://localhost:3000/fetchJobs', {
        params: {
          company: '', // Add other filter criteria here based on state values
          min_salary: minSalary,
          max_salary: maxSalary,
          location_iso: '',
          job_type: selectedJobTypes.join(','), // Convert array to comma-separated string
          degree_required: isDegreeRequired,
          technologies: selectedTechnologies.map(tech => tech.toLowerCase()).join(','), // Convert array to comma-separated string
        },
      });
      console.log(response.data);
      setJobs(response.data);
      setCurrentJobIndex(0);
    } catch (error) {
      console.error('Error fetching filtered jobs:', error.message);
    }
  };

  


  return (
    <div className="h">
      <NavBar />
      <WelcomeSection />
      <div className="filters-container">
          {/* Job Type Filter */}
          <div className="job-type">
          <label>
          Job Type:
          <input
            type="checkbox"
            value="full_time"
            checked={selectedJobTypes.includes('full_time')}
            onChange={() => handleJobTypeChange('full_time')}
          />
          Full-time
        </label>
        <label>
          <input
            type="checkbox"
            value="part_time"
            checked={selectedJobTypes.includes('part_time')}
            onChange={() => handleJobTypeChange('part_time')}
          />
          Part-time
        </label>
        <label>
          <input
            type="checkbox"
            value="internship"
            checked={selectedJobTypes.includes('internship')}
            onChange={() => handleJobTypeChange('internship')}
          />
          Internship
        </label>
        </div>
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
        <div style={{marginTop: '40px'}}>
        <button onClick={fetchFilteredJobs}>
          Filter Jobs
        </button>
        </div>
        </div>
      <div className='home-page'>
        {jobs && currentJobIndex < jobs.length ? (
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
