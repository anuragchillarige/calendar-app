import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import Sign from './Sign';

const Hello = () => {
  return (
    <div>
      <Sign/>
    </div>
    
  );
=======
import Weather from './Components/Weather';
import Time from './Components/Time';

const Hello = () => {
  return <Weather />;
>>>>>>> 5ad34d6697b80b83b763774fd71f1ecea5e2f89e
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
