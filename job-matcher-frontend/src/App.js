
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import LandingPage from './components/LandingPage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import HomePage from './components/HomePage';
import HomePageEmployee from './components/HomePageEmployee';

function App() {
  return (
    
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/homeEmployee" element={<HomePageEmployee />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    
  );
}

export default App;
