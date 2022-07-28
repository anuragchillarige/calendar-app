import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Weather from './Components/Weather';
import Time from './Components/Time';

import Sign from './Components/SignIn';
import Register from './Components/Register';
import Reset from './Components/Reset';
import EventsHolder from './Components/EventsHolder';
import { useEffect, useState } from 'react';

const Main = () => {
  const mouseHide = setInterval((e) => {
    const getMouseCoords = (e) => {
      let body = document.querySelector('body');
      body.style.cursor = 'auto';
    };

    let body = document.querySelector('body');
    body.style.cursor = 'none';

    document.onmousemove = getMouseCoords;
  }, 1000);

  return (
    <div className="component-holder">
      <Weather />
      <EventsHolder />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sign />} />;
        <Route path="/dash" element={<Main />} />;
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
      </Routes>
    </Router>
  );
}
