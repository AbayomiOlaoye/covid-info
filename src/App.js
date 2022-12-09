import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/Navigation';
import './App.css';
import ShowInfo from './components/ShowInfo';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:updated" element={<ShowInfo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
