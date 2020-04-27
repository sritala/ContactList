import React, { useState } from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import Dialog from './Dialog';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


const initialInformation = {
    firstName: '',
    lastName: '',
    email: ''
}

export default function () {

    const useStyles = makeStyles(theme => ({
        root: {
          '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 300,
          },
        },
        container: {
          flexDirection:'column',
          alignItems: 'center',
          
        },
        save: {
         paddingTop:'1rem',
         
        },
        dialog:{
          paddingTop:'1rem',   
        },
        item:{

        },
        buttons:{
          display: 'flex',
          flexDirection: 'row',
          justifyContent:'center',
          paddingTop:'1rem',  
        }

      }));
      
    const classes = useStyles();

    const [values, setValues] = React.useState(initialInformation);
    const [list, setList] = useState([]);

    const cancel = () => {
      setValues(initialInformation);
    };

    const handleChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        } as any);

    };

    const handleOnSubmit = (event) => {
      event.preventDefault()
      setList([...list, values])
      } 

    return ( 
      <div>
        <form onSubmit={handleOnSubmit} className={classes.root} noValidate autoComplete="off">
        <Grid container={true} className={classes.container}>
          <Grid item={true} className={classes.item}>
          <TextField
            id="standard-multiline-flexible"
            label="First name"
            value={values.firstName}
            onChange={handleChange}
            name={'firstName'}
          />
          </Grid>
          <Grid item={true} className={classes.item} >
          <TextField
            id="standard-textarea"
            label="Last name"
            value={values.lastName}
            onChange={handleChange}
            name={'lastName'}
          />
          </Grid>
          <Grid item={true} className={classes.item}>
           <TextField
            id="standard-textarea"
            label="Email"
            value={values.email}
            onChange={handleChange}
            name={'email'}
          />
          </Grid>
          <Grid container={true} spacing={1} className={classes.buttons}>
            <Grid item={true} className={classes.save}>
              <Button style={{width:180, height: '3rem'}}variant="contained"  color="primary"type="submit">Save</Button>
            </Grid>
            <Grid item={true} className={classes.save}>
              <Button style={{width:100, height: '3rem'}} variant="contained" onClick={cancel} color="secondary">Cancel</Button>
            </Grid>
          </Grid>
        </Grid>
        <Box className={classes.dialog}>
          <Dialog list={list} values={values}/>
        </Box>
      </form> 
    </div>
    )
}