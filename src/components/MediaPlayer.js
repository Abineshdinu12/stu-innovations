import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const MediaPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="max-w-4xl mx-auto my-8">
      <div className="relative">
        <video
          ref={videoRef}
          className="w-full h-auto rounded-lg shadow-lg"
          src="https://youtu.be/AiD6SOOBKZI?si=F3v0srq0EdkZ_ZD2"
          poster="/api/placeholder/640/360"
        >
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-4 bg-black bg-opacity-50">
          <button
            onClick={togglePlay}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          <button
            onClick={toggleMute}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediaPlayer;