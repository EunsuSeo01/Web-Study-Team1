import './App.css';
import React from 'react';
import MainPage from './Pages/MainPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
