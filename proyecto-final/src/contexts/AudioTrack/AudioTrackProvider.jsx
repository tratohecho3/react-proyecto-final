import { AudioTrackContext } from './AudioTrackContext';
import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
export const AudioTrackProvider = ({ children }) => {
  const [audioTrack, setAudioTrack] = useState();
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioPlayer = useRef();

  const value = {
    audioPlayer,
    audioTrack,
    setAudioTrack,
    isAudioPlaying,
    setIsAudioPlaying,
  };
  return <AudioTrackContext.Provider value={value}>{children}</AudioTrackContext.Provider>;
};

AudioTrackProvider.propTypes = {
  children: PropTypes.node,
};
