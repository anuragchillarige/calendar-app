import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sign from './Sign';

const Hello = () => {
  return (
    <div>
      <Sign/>
    </div>
    
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
