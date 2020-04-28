import React from "react";
import Box from "@material-ui/core/Box";
import { Typography, makeStyles, Grid } from "@material-ui/core";
import Persons from '../components/ui/Persons'
import personService from '../components/services/persons';

const useStyles = makeStyles((theme) => ({
    form: {
      textAlign: 'center',
    }
    
  }));

function ShowContacts() {
  
  const classes = useStyles();
 
  return (
    <div>
      <Box className={classes.form}>
        <Typography variant="h5" color="primary">
          Your Contacts
        </Typography>
      </Box>
    </div>
  );
}

export default ShowContacts;
