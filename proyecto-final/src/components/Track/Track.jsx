import { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Avatar } from '@material-ui/core';
import { trackShape } from '../../proptypes';
import { truncate } from '../../utils';
import { PlayArrow, Pause } from '@material-ui/icons';
import { AudioTrackContext } from '../../contexts/AudioTrack';
import useAudioPlayer from '../../hooks/useAudioPlayer';

const useStyles = makeStyles(({ palette, spacing, shadows }) => ({
  paper: {
    padding: spacing(1),
    textAlign: 'center',
    color: palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: spacing(1),
    position: 'relative',
    '&:hover div': {
      opacity: 1,
    },
  },
  image: {
    width: '100%',
  },
  avatar: {
    backgroundColor: palette.success.main,
    position: 'absolute',
    bottom: spacing(2),
    right: spacing(2),
    cursor: 'pointer',
    opacity: 0,
    transition: 'opacity 0.5s',
    boxShadow: shadows[1],
  },
  icon: {
    color: palette.grey['900'],
    fontSize: spacing(4),
  },
}));
const Track = ({ track }) => {
  const classes = useStyles();
  const { audioTrack, setAudioTrack, isAudioPlaying } = useContext(AudioTrackContext);
  const { play, pause } = useAudioPlayer();
  const showPauseButton = isAudioPlaying && audioTrack.id === track.id;
  const playAudio = () => {
    setAudioTrack(track);
    play();
  };

  return (
    <Paper className={classes.paper}>
      <Typography variant="subtitle1">{truncate(track.name)}</Typography>
      <img src={track.album.images[0].url} className={classes.image} />
      {!showPauseButton && (
        <Avatar className={classes.avatar}>
          <PlayArrow className={classes.icon} onClick={playAudio} />
        </Avatar>
      )}
      {showPauseButton && (
        <Avatar className={classes.avatar}>
          <Pause className={classes.icon} onClick={pause} />
        </Avatar>
      )}
    </Paper>
  );
};

Track.propTypes = {
  track: trackShape,
};
export default Track;
