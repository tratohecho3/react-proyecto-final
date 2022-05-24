import { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Avatar } from '@material-ui/core';
import { trackShape } from '../../proptypes';
import { truncate } from '../../utils';
import { PlayArrow, PauseCircleFilled } from '@material-ui/icons';

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
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioPlayer = useRef();
  const playAudio = () => {
    audioPlayer.current.play();
    setIsAudioPlaying(true);
  };
  const pauseAudio = () => {
    audioPlayer.current.pause();
    setIsAudioPlaying(false);
  };

  return (
    <Paper className={classes.paper}>
      <Typography variant="subtitle1">{truncate(track.name)}</Typography>
      <img src={track.album.images[0].url} className={classes.image} />
      <audio ref={audioPlayer} src={track.preview_url} />
      {!isAudioPlaying && (
        <Avatar className={classes.avatar}>
          <PlayArrow className={classes.icon} onClick={playAudio} />
        </Avatar>
      )}
      {isAudioPlaying && (
        <Avatar className={classes.avatar}>
          <PauseCircleFilled className={classes.icon} onClick={pauseAudio} />
        </Avatar>
      )}
    </Paper>
  );
};

Track.propTypes = {
  track: trackShape,
};
export default Track;
