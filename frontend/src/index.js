import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './Login/Login.js';
import Signup from './Login/Signup';
import Home from './HomeLandder/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Login />
    <Signup />
    <Home />
  </React.StrictMode>
);
