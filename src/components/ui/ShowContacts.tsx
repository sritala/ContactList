import React, { useState, useEffect } from 'react';
import { makeStyles, Box } from '@material-ui/core';
import personService from '../services/persons';
import ShowContactsBlock from '../ui/ShowContactsBlock';

const useStyles = makeStyles((theme) => ({
   dialog:{
    paddingTop:'1rem',   
  },
}));

export default function ShowContacts () {

  const classes = useStyles();

  const [persons, setPersons] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons);
      });
  }, []);


  const deletePerson = id => {
    personService
      .remove(id)
      .then(() => {
        const updatedPersons = persons.filter(p => p.id !== id);
        setPersons(updatedPersons);
      })
  }

  const handleSearchName = event => {
    setSearchName(event.target.value);
    setShowAll(false);
  }

  const contactsToShow = showAll
  ? persons
  : persons.filter(person => {
      let toFilter = person.name.toLocaleLowerCase();
      let toSearch = searchName.toLowerCase()
      return toFilter.includes(toSearch);
    });
    
      return (
        <div>
          <Box className={classes.dialog}>
             <ShowContactsBlock
             contactsToShow={contactsToShow}
             handleSearchName = {handleSearchName}
             deletePerson = {deletePerson}
             persons = {persons}
             />
          </Box>
        </div>
      );
}