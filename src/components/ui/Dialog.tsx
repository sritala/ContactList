import React, { forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import CloseIcon from '@material-ui/icons/Close';
import Box from '@material-ui/core/Box';

import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions/transition';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    textAlign:'center',
    padding: '1rem',
  },
  item:{

  },
  ul:{
    paddingTop: 10,
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    paddingLeft: '8rem',
    paddingRight: '8rem',
    paddingBottom: '2rem',
  },
  dialog:{
    maxWidth: '100%',
    height: '100%',
    display: 'flex',
    justifyContent:'center'
  },
  open:{
    width: 320,
    marginTop:'1rem'

  },
  box:{
    textAlign: 'center',
 
  },
   buttons:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',
    paddingTop:'1rem',
    paddingBottom:'3rem',  
  },

}));

const Transition: React.ComponentType<TransitionProps> = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface OwnProps {
  list: any[];
  values: any;
}

type Props = OwnProps; 


export default function FullScreenDialog({ list, values }: Props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
 
  const [updatedList, setUpdatedList] =  React.useState(list);
  const [newValues, setNewValues] = React.useState(values);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = event => {
    setNewValues({
      ...newValues,
      [event.target.name]: event.target.value
    } as any);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault()
    setUpdatedList([...updatedList, newValues])
    }

  if (list.length === 0) 
  return(
    <>
      <Box className={classes.box}>
        <Typography variant="body1" style={{color: '#949494'}}>or</Typography>
        <Button className={classes.open} disabled={true} variant="outlined" color="primary" onClick={handleClickOpen}>
          Show Contacts
        </Button>
        </Box>
    </>
  ); 

  return (
    <div>
      <Box className={classes.box}>
        <Typography variant="body1" style={{color: '#949494'}}>or</Typography>
        <Button className={classes.open} variant="outlined" color="primary" onClick={handleClickOpen}>
         Show Contacts
        </Button>
      </Box>
      <Dialog className={classes.dialog} open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton style={{color: '#575757'}} edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List>
        <form onSubmit={handleOnSubmit} noValidate autoComplete="off">
        <Typography variant="h6" className={classes.title} style={{color: '#575757'}}>
          My information
        </Typography>
        <Typography variant={'h6'}>
            {list.map((i) => {
              return (
                <ul className={classes.ul}>
                  <li>
                  <Grid item={true} className={classes.item}>
                    <TextField
                    id="standard-multiline-flexible"
                    label="First name"
                    value={values.firstName}
                    name={'firstName'}
                    onChange={handleChange}
                    />
                  </Grid>
                  <Grid item={true} className={classes.item} >
                  <TextField
                    id="standard-textarea"
                    label="Last name"
                    value={values.lastName}
                    name={'lastName'}
                    onChange={handleChange}
                  />
                  </Grid>
                  <Grid item={true} className={classes.item}>
                  <TextField
                    id="standard-textarea"
                    label="Email"
                    value={values.email}
                    name={'email'}
                    onChange={handleChange}
                  />
                  </Grid>
                  </li>
                </ul>
              );
            }
            )}
          </Typography>
          </form>
        </List>
        <Grid container={true} spacing={1} className={classes.buttons}>
          <Grid item={true}>
            <Button style={{width:180, height: '3rem'}}variant="contained"  color="primary"type="submit">Save</Button>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}