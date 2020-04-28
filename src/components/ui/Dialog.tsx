import React, { forwardRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Persons from "./Persons";
import personService from "../services/persons";
import Slide from "@material-ui/core/Slide";
import Filter from "./Filter";
import { TransitionProps } from "@material-ui/core/transitions/transition";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    padding: "1rem",
    textAlign:'center'

  },

  dialog: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
  open: {
    width: 320,
    marginTop: "1rem",
  },
  box: {
    textAlign: "center",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: "1rem",
    paddingBottom: "3rem",
  },
  contacts:{
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: 600,
    [theme.breakpoints.down('xs')]: {
      width: 350,
    },
  }

}));

const Transition: React.ComponentType<TransitionProps> = forwardRef(
  function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  }
);

export default function SimpleDialog({
  contactsToShow,
  handleSearchName,
  deletePerson,
  persons,
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (persons.length === 0)
    return (
      <>
        <Box className={classes.box}>
          <Typography variant="body1" style={{ color: "#949494" }}>
            or
          </Typography>
          <Button
            className={classes.open}
            disabled={true}
            variant="outlined"
            color="primary"
            onClick={handleClickOpen}
          >
            Show Contacts
          </Button>
        </Box>
      </>
    );

  return (
    <div>
      <Box className={classes.box}>
        <Typography variant="body1" style={{ color: "#949494" }}>
          or
        </Typography>
        <Button
          className={classes.open}
          variant="outlined"
          color="primary"
          onClick={handleClickOpen}
        >
          Show Contacts
        </Button>
      </Box>
      <Dialog
        className={classes.dialog}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <form className={classes.form}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                style={{ color: "white" }}
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <List>
          <Box>
            <Typography
              variant="h5"
              className={classes.title}
              style={{ color: "#575757" }}
            >
              My Contacts
            </Typography>
          </Box>
          <Box style={{display:'flex', justifyContent:'flex-end'}}>
            <Filter onChangeHandler={handleSearchName} />
          </Box>
            <Box className={classes.contacts}>
              <Grid item={true}>
                <Typography variant={"h6"}>
                  <Persons persons={contactsToShow} onDelete={deletePerson} />
                </Typography>
              </Grid>
           </Box>
          </List>
        </form>
      </Dialog>
    </div>
  );
}
