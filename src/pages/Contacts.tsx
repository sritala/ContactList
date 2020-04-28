import React from "react";
import Box from "@material-ui/core/Box";
import { Typography, makeStyles } from "@material-ui/core";
import ShowContacts from '../components/ui/ShowContacts';

const useStyles = makeStyles((theme) => ({
    form: {
      textAlign: 'center',
    }
    
  }));

function Contacts() {
  
  const classes = useStyles();
 
  return (
    <div>
      <Box className={classes.form}>
        <Typography variant="h5" color="primary">
          Your Contacts
        </Typography>
        <ShowContacts/>
      </Box>
    </div>
  );
}

export default Contacts;
