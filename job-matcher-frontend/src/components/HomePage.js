// HomePage.js

import React from 'react';
import '../css/HomePage.css'; 
import CardComponent from './CardComponent';

const HomePage = () => {
  return (
    <div className="home-page">
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
  );
};

export default HomePage;
