// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, TextField } from '@mui/material';
import ' .src\style\ai dashboard.css'; // Import the CSS file

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          AI Image Generator
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/train">Train Models</Button>
        <Button color="inherit" component={Link} to="/prompt">Prompt</Button>
      </Toolbar>
    </AppBar>
  );
};

const Home = () => {
  return (
    <Container className="home-container">
      <Typography variant="h4" gutterBottom>
        Welcome to the AI Image Generator Dashboard
      </Typography>
      <Typography variant="body1">
        Use this dashboard to train models and generate images using AI.
      </Typography>
    </Container>
  );
};

const TrainModel = () => {
  const handleTrainModel = () => {
    alert("Training model...");
  };

  return (
    <Container className="train-container">
      <Typography variant="h4" gutterBottom>
        Train Your Model
      </Typography>
      <Typography variant="body1" gutterBottom>
        Click the button below to start training your AI model.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleTrainModel}>
        Train Model
      </Button>
    </Container>
  );
};

const Prompt = () => {
  const [prompt, setPrompt] = useState('');

  const handleGenerateImage = () => {
    alert(`Generating image with prompt: ${prompt}`);
  };

  return (
    <Container className="prompt-container">
      <Typography variant="h4" gutterBottom>
        Generate Image
      </Typography>
      <TextField
        label="Enter your prompt"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleGenerateImage}>
        Generate Image
      </Button>
    </Container>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/train" element={<TrainModel />} />
        <Route path="/prompt" element={<Prompt />} />
      </Routes>
    </Router>
  );
};

export default App;