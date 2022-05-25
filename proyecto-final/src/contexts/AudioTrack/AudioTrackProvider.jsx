import { AudioTrackContext } from './AudioTrackContext';
import { useState } from 'react';
import PropTypes from 'prop-types';
export const AudioTrackProvider = ({ children }) => {
  const [audioTrack, setAudioTrack] = useState();
  const value = {
    audioTrack,
    setAudioTrack,
  };
  return <AudioTrackContext.Provider value={value}>{children}</AudioTrackContext.Provider>;
};

AudioTrackProvider.propTypes = {
  children: PropTypes.node,
};
