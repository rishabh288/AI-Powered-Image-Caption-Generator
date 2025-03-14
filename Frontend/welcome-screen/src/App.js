// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen';
import SignUp from './components/SignUp';



function App() {
  return (
    <Router>
      <Switch> 
        <Route path="/" component={WelcomeScreen} />
        <Route path="/signup" component={<SignUp/>} />
      </Switch>
    </Router>
  );
}

export default App;