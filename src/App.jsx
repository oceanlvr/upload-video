import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './HomePage';
import VideoPage from './VideoPage';
import Video1 from './assets/1t.mp4';
import Video2 from './assets/2t.mp4';
import Video3 from './assets/3t.mp4';
import Video4 from './assets/4t.mp4';

import './App.css';

const App = () => {
  const navigate = useNavigate();
  const videos = [Video1, Video2, Video3, Video4];
  const paths = ['/video1', '/video2', '/video3', '/video4'];
  const config = videos.map((video, index) => ({ video, path: paths[index] }));
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowUp':
          navigate('/video3');
          break;
        case 'ArrowDown':
          navigate('/video4');
          break;
        case 'ArrowLeft':
          navigate('/video1');
          break;
        case 'ArrowRight':
          navigate('/video2');
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
      {
        config.map(({ video, path }) => (
          <Route key={path} path={path} element={<VideoPage videoSrc={video} />} />
        ))
      }
    </Routes>
  );
};

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
