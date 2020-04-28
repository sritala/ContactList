
import React from 'react';
import Box from '@material-ui/core/Box'
import { Typography, makeStyles } from '@material-ui/core';
import Form from  '../components/ui/Form';


const useStyles = makeStyles(() => ({
    wrapper: {
    
    },
    form: {
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '1rem',
    },
    
}));

function FormPage() {
    const classes = useStyles();

    return (  
        <div className={classes.wrapper}> 
            <Box className={classes.form}>
                <Typography variant='h5' color='primary'>Add Contacts</Typography>   
                <Form/>
            </Box>
        </div>
    )
}

export default FormPage;
