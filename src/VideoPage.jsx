
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const VideoPage = ({ videoSrc }) => {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const videoElement = videoRef.current;

    const handlePlay = () => {
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if (videoElement.mozRequestFullScreen) { // Firefox
        videoElement.mozRequestFullScreen();
      } else if (videoElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
        videoElement.webkitRequestFullscreen();
      } else if (videoElement.msRequestFullscreen) { // IE/Edge
        videoElement.msRequestFullscreen();
      }
    };

    const handleEnded = () => {
      navigate('/');
    };

    const handleKeyDown = () => {
      navigate('/');
    };

    videoElement.addEventListener('play', handlePlay);
    videoElement.addEventListener('ended', handleEnded);
    window.addEventListener('keydown', handleKeyDown);

    videoElement.play();

    return () => {
      videoElement.removeEventListener('play', handlePlay);
      videoElement.removeEventListener('ended', handleEnded);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);


  return (
    <div>
      <video ref={videoRef} width="100%" controls>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPage;
