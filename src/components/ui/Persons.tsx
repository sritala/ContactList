import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {Grid, Box} from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme) => ({
  grid: {
     display:'flex',
     justifyContent: 'center',
     flexDirection: 'row',
  },
  image:{
  
  },
  information:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    color: '#575757'
  }
  
}));

const image = (person) => {
  if (person.image !== null) {
    return(
      <>
        <img src={person.image} width={200} height={200} style={{borderRadius: '70%'}} />
      </>
    );
  }
  return (
    <>
    <img src={'https://mcdowellhomes.com.au/wp-content/uploads/2016/09/no-user-image-300x300.gif'} width={200} style={{borderRadius: '70%'}}/>
    </>
  );
}

const Persons = ({ persons, onDelete }) => {

  function confirmDelete(id, name) {
    if(window.confirm(`Delete ${name}?`)) {
      onDelete(id);
    }
    return;
  }

  const classes = useStyles();
  return(
    <>
      {persons.map(person => (
        <li style={{listStyle:'none'}}>
          <p key={person.id}>
          <Grid container={true} spacing={6} className={classes.grid}>
            <Grid item={true} className={classes.image} >
                {image(person)}
            </Grid>
            <Grid item={true} className={classes.information}>
              <Box>
                 {person.name} 
              </Box>
              <Box>
                 {person.number}
              </Box>
              <Button  
                onClick={() => confirmDelete(person.id, person.name)}
                >
                <DeleteIcon color={'primary'}/>
              </Button>
            </Grid>
          </Grid>
          </p>
        </li>
      ))}
    </>
  );
}
export default Persons;