import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './HomePage';
import VideoPage from './VideoPage';
import './App.css';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowUp':
          navigate('/video1');
          break;
        case 'ArrowDown':
          navigate('/video2');
          break;
        case 'ArrowLeft':
          navigate('/video3');
          break;
        case 'ArrowRight':
          navigate('/video4');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/video1" element={<VideoPage videoSrc="1.mp4" />} />
      <Route path="/video2" element={<VideoPage videoSrc="2.mp4" />} />
      <Route path="/video3" element={<VideoPage videoSrc="3.mp4" />} />
      <Route path="/video4" element={<VideoPage videoSrc="4.mp4" />} />
    </Routes>
  );
};

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
