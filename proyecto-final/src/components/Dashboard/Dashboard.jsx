import { makeStyles } from '@material-ui/core/styles';
import { Grid, FormControl, Input, InputAdornment, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useState, useEffect } from 'react';
import useSearchTracks from '../../hooks/useSearchTracks';
import TracksGrid from '../TracksGrid/TracksGrid';
import { useParams, useNavigate } from 'react-router-dom';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    backgroundColor: palette.grey['900'],
    height: ({ query }) => (query ? '100%' : '100vh'),
    width: '100%',
    marginTop: ({ query }) => (query ? spacing(20) : 0),
  },
  input: {
    backgroundColor: palette.common.white,
    borderRadius: spacing(3),
    padding: spacing(1),
    width: spacing(50),
  },
}));

const Dashboard = () => {
  const { searchTerm } = useParams();
  let navigate = useNavigate();
  const [query, setQuery] = useState();
  const classes = useStyles({ query });
  const [tracks] = useSearchTracks({ query });

  useEffect(() => {
    setQuery(searchTerm);
  }, [searchTerm]);

  const handleSubmit = (event) => {
    if (event.key !== 'Enter') {
      return;
    }
    if (event.target.value === '') {
      return navigate('/');
    }
    return navigate(`/search/${event.target.value}`);
  };

  return (
    <Grid container className={classes.root} justifyContent="center" alignItems="center">
      <AudioPlayer />
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
