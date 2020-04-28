import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography, makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 300,
    },
  },
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
  save: {
    paddingTop: "1rem",
  },
  dialog: {
    paddingTop: "1rem",
  },
  item: {
    
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: "1rem",
  },
}));


const PersonForm = ({
  handleOnSubmit,
  newName,
  handleOnNameChange,
  newNumber,
  handleOnNumberChange,
  cancel
}) => {

  const classes = useStyles();
  return (
    <form onSubmit={handleOnSubmit} className={classes.root} noValidate autoComplete="off">
      <Grid container={true} className={classes.container}>
        <Grid item={true} className={classes.item}>
          <TextField
            id="filled-basic"
            label="Name"
            value={newName}
            onChange={handleOnNameChange}
            name={"name"}
          />
        </Grid>
        <Grid item={true} className={classes.item}>
          <TextField
            id="standard-multiline-flexible"
            label="Number"
            value={newNumber}
            onChange={handleOnNumberChange}
            name={"number"}
          />
        </Grid>
      </Grid>
      <Grid container={true} spacing={1} className={classes.buttons}>
        <Grid item={true} className={classes.save}>
          <Button
            style={{ width: 180, height: "3rem" }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Add
          </Button>
        </Grid>
        <Grid item={true} className={classes.save}>
          <Button
            style={{ width: 100, height: "3rem" }}
            variant="contained"
            onClick={cancel}
            color="secondary"
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default PersonForm;
