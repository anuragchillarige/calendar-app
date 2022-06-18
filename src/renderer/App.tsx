import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Weather from './Components/Weather';
import Time from './Components/Time';

import Sign from './Components/SignIn';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import Reset from './Components/Reset';


const Hello = () => {
  return( <Weather />);
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sign/>}/>;
        <Route path="/dash" element={<Dashboard/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/reset" element={<Reset/>}/> 
      </Routes>
    </Router>
  );
}