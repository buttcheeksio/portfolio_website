import React from 'react';
import './App.css';

import Welcome from './Components/welcome'
import LandingPage from './Components/landingpage'

function onClickEye(e) {
  console.log(e.target)
}

function App() {
  return (
    <div className='wrapping-div'>
      <Welcome />
      <LandingPage />
    </div>
  );
}

export default App;
