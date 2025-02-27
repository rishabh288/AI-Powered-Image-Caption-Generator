// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomeScreen from './WelcomeScreen';
import Home from './Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/" component={WelcomeScreen} />
      </Switch>
    </Router>
  );
}

export default App;