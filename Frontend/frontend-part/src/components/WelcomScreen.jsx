//welcome screen component

import React from 'react';
import { Link } from "react-router-dom";
import '../style/welcome.css';

const WelcomeScreen = () => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Welcome to Our App!</h1>
      <p className="welcome-subtitle">We are glad to have you here.</p>
      <Link to="/home">
        <button className="welcome-button">Get Started</button>
      </Link>
    </div>
  );
};

export default WelcomeScreen;
