// import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { trackShape } from '../../proptypes';
import Track from '../Track/Track';
// const useStyles = makeStyles((theme) => ({
//   paper: {
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     whiteSpace: 'nowrap',
//     marginBottom: theme.spacing(1),
//   },
// }));

const TracksGrid = ({ items, total }) => {
  // const classes = useStyles();
  console.log(items, total);
  if (total === 0) {
    return (
      <Typography variant="subtitle1" gutterBottom>
        No hay canciones con este nombre
      </Typography>
    );
  }
  return (
    <Grid container>
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
