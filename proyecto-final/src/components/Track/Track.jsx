import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Avatar } from '@material-ui/core';
import { trackShape } from '../../proptypes';
import { truncate } from '../../utils';
import { PlayArrow } from '@material-ui/icons';

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

  return (
    <Paper className={classes.paper}>
      <Typography variant="subtitle1">{truncate(track.name)}</Typography>
      <img src={track.album.images[0].url} className={classes.image} />
      <Avatar className={classes.avatar}>
        <PlayArrow className={classes.icon}></PlayArrow>
      </Avatar>
    </Paper>
  );
};

Track.propTypes = {
  track: trackShape,
};
export default Track;
