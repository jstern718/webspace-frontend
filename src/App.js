"Use strict;"

/** External dependencies */
import React from 'react';
import { Route, Routes } from 'react-router-dom';

/** Internal dependencies */
import './App.css';

// React/jsx components */
import Home from './components/HomePage'


function App(){

  console.log("app runs");

  return (
    <div>
      <Routes>
        <Route path="/:nombre" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;