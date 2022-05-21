import { makeStyles } from '@material-ui/core/styles';
import { Grid, FormControl, Input, InputAdornment, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react';
import useSearchTracks from '../../hooks/useSearchTracks';
import TracksGrid from '../TracksGrid/TracksGrid';

const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    backgroundColor: palette.grey['900'],
    height: ({ query }) => (query ? '100%' : '100vh'),
    width: '100%',
    marginTop: ({ query }) => (query ? spacing(10) : 0),
  },
  input: {
    backgroundColor: palette.common.white,
    borderRadius: spacing(3),
    padding: spacing(1),
    width: spacing(50),
  },
}));

const Dashboard = () => {
  const [query, setQuery] = useState();
  const classes = useStyles({ query });
  const [tracks] = useSearchTracks({ query });

  const handleSubmit = (event) => {
    if (event.key === 'Enter') {
      setQuery(event.target.value);
    }
  };

  return (
    <Grid container className={classes.root} justifyContent="center" alignItems="center">
      <FormControl>
        <Input
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          placeholder="Artistas, canciones o podcasts"
          classes={{ root: classes.input }}
          disableUnderline
          onKeyPress={handleSubmit}
        />
        <Typography variant="subtitle1" align="center">
          Presiona Enter Para buscar
        </Typography>
      </FormControl>
      {query && tracks?.href && <TracksGrid {...tracks} />}
    </Grid>
  );
};

export default Dashboard;
