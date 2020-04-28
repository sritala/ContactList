import React, { forwardRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Persons from "./Persons";
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

export default function ShowContactsBlock({
  contactsToShow,
  handleSearchName,
  deletePerson,
  persons,
}) {
  
  const classes = useStyles();

  return (
    <div>
        <Box>
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
    </div>
  );
}
