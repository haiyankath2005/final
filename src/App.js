import React from 'react';
import logo from './logo.png';
import './App.css';
import Dropdown from './components/Dropdown.js';

const App = () => {
  return (
    <div className="App">

      <div className="Top-section">
        <p className="heading">Course Registration Form</p>
        <img src={logo} className="App-logo" alt="logo" />
      </div>

      <div className="Bottom-section">
        <div>
          <Dropdown />
        </div>
      </div>
    

    </div>
  );
}

export default App;