import Dashboard from './components/Dashboard/Dashboard';
import { Routes, Route } from 'react-router-dom';

import './App.css';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/search/:searchTerm" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
