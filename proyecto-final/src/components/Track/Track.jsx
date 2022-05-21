import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import { trackShape } from '../../proptypes';
import { truncate } from '../../utils';
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  image: {
    width: '100%',
  },
}));
const Track = ({ track }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography variant="subtitle1">{truncate(track.name)}</Typography>
      <img src={track.album.images[0].url} className={classes.image} />
    </Paper>
  );
};

Track.propTypes = {
  track: trackShape,
};
export default Track;
