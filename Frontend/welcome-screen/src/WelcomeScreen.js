// src/WelcomeScreen.js
import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomeScreen.css';

const WelcomeScreen = () => {
  return (
    <div className="welcome-container">
      <nav className="navbar">
        <h2 className="navbar-title">Lwda Lehsun</h2>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/home">About</Link></li>
        </ul>
      </nav>
      <h1 className="welcome-title">Welcome to Our App!</h1>
      <p className="welcome-subtitle">We are glad to have you here.</p>
      <Link to="/home">
        <button className="welcome-button">Get Started</button>
      </Link>
    </div>
  );
};

export default WelcomeScreen;