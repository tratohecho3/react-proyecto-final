import { makeStyles } from "@material-ui/core/styles";
import { Grid, FormControl, Input, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

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
        />
      </FormControl>
    </Grid>
  );
};

export default Dashboard;
