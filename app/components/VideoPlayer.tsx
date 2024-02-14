import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player/file';
import { VideoProps } from '../types';

const VideoPlayer: React.FC<VideoProps> = ({ url }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only render the ReactPlayer component if isMounted is true
  return (
    <>
      {isMounted && (
        <ReactPlayer
          url={url}
          playing={false}
          controls={true}
          width="100%"
          height="100%"
        />
      )}
    </>
  );
};

export default VideoPlayer;
