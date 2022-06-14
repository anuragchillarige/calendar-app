import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import Sign from './Sign';
import Weather from './Components/Weather';
import Time from './Components/Time';

// const Hello = () => {
//   return (
//     <div>
//       <Sign/>
//     </div>
    
//   );


const Hello = () => {
  return( <Weather />);
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Weather />} />
      </Routes>
    </Router>
  );
}
