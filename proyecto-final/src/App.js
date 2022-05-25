import Dashboard from './components/Dashboard/Dashboard';
import { Routes, Route } from 'react-router-dom';
import { AudioTrackProvider } from './contexts/AudioTrack';
import './App.css';

const App = () => {
  return (
    <>
      <AudioTrackProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/search/:searchTerm" element={<Dashboard />} />
        </Routes>
      </AudioTrackProvider>
    </>
  );
};

export default App;
