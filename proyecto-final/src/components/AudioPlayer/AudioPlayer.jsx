import { useContext, useEffect } from 'react';
import { AudioTrackContext } from '../../contexts/AudioTrack';
import { Grid, makeStyles, Avatar, Slider, Typography } from '@material-ui/core';
import { PlayArrow, Pause } from '@material-ui/icons';
import useAudioPlayer from '../../hooks/useAudioPlayer';

const useStyles = makeStyles(({ palette, spacing, shadows, zIndex }) => ({
  root: {
    background: palette.success.main,
    position: 'fixed',
    top: 0,
    zIndex: zIndex.appBar,
    padding: spacing(2),
  },
  avatar: {
    background: palette.common.white,
    cursor: 'pointer',
    boxShadow: shadows[1],
  },
  icon: {
    color: palette.grey['900'],
    fontSize: spacing(4),
  },
  currentTime: {
    marginRight: spacing(2),
  },
  image: {
    width: '100%',
    maxWidth: spacing(8),
    marginRight: spacing(2),
  },
}));

const AudioPlayer = () => {
  const classes = useStyles();
  const { audioTrack, audioPlayer, isAudioPlaying, setIsAudioPlaying } =
    useContext(AudioTrackContext);
  const {
    currentTime,
    setCurrentTime,
    seekValue,
    setSeekValue,
    play,
    pause,
    onPlaying,
    onTimelineChange,
  } = useAudioPlayer();

  useEffect(() => {
    if (audioTrack) {
      setCurrentTime(0);
      setSeekValue(0);
      setIsAudioPlaying(true);
    }
  }, [audioTrack]);

  if (!audioTrack) {
    return null;
  }
  return (
    <Grid container className={classes.root}>
      <Grid item xs={4} container wrap="nowrap" alignItems="center">
        <img src={audioTrack.album.images[0].url} className={classes.image} />
        <Typography variant="subtitle1">{audioTrack.name}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Grid container justifyContent="center" alignItems="center">
          {!isAudioPlaying && (
            <Avatar className={classes.avatar}>
              <PlayArrow className={classes.icon} onClick={play} />
            </Avatar>
          )}
          {isAudioPlaying && (
            <Avatar className={classes.avatar}>
              <Pause className={classes.icon} onClick={pause} />
            </Avatar>
          )}
        </Grid>
        <audio src={audioTrack.preview_url} ref={audioPlayer} onTimeUpdate={onPlaying} autoPlay>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
        <Grid container wrap="nowrap">
          <Typography variant="subtitle1" align="center" className={classes.currentTime}>
            {currentTime.toFixed(2)}
          </Typography>
          <Slider
            defaultValue={0}
            min={0}
            max={100}
            step={1}
            value={seekValue}
            onChange={onTimelineChange}
          />
        </Grid>
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
};

export default AudioPlayer;
