import { makeStyles } from "@material-ui/core/styles";
import { Grid, FormControl, Input, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";
import useSearchTracks from "../../hooks/useSearchTracks";

const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    backgroundColor: palette.grey["900"],
    height: "100vh",
    width: "100%",
  },
  input: {
    backgroundColor: palette.common.white,
    borderRadius: spacing(3),
    padding: spacing(1),
    width: spacing(50),
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const [tracks] = useSearchTracks({ query });

  console.log(tracks);
  const handleSubmit = (event) => {
    if (event.key === "Enter") {
      setQuery(event.target.value);
    }
  };

  return (
    <Grid
      container
      className={classes.root}
      justifyContent="center"
      alignItems="center"
    >
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
      </FormControl>
    </Grid>
  );
};

export default Dashboard;
