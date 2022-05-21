import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { trackShape } from '../../proptypes';
import Track from '../Track/Track';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    marginTop: spacing(5),
  },
}));

const TracksGrid = ({ items, total }) => {
  const classes = useStyles();
  console.log(items, total);
  if (total === 0) {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="subtitle1" align="center">
            No hay canciones con este nombre
          </Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="center" alignItems="center">
          <img src="/404-logo.png" />
        </Grid>
      </Grid>
    );
  }
  return (
    <Grid container className={classes.root}>
      <Grid item xs={2}></Grid>
      <Grid item container xs={8} spacing={4}>
        {items.map((item) => {
          return (
            <Grid item xs={3} key={item.id}>
              <Track track={item} />
            </Grid>
          );
        })}
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

TracksGrid.propTypes = {
  items: PropTypes.arrayOf(trackShape),
  total: PropTypes.number,
};

export default TracksGrid;
