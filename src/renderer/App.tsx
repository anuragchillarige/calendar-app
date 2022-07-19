import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Weather from './Components/Weather';
import Time from './Components/Time';

import Sign from './Components/SignIn';
import Register from './Components/Register';
import Reset from './Components/Reset';
import EventsHolder from './Components/EventsHolder';

const Main = () => {
  return (
    <div>
      {/* <Weather /> */}
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
