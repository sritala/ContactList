import React, { useState, useEffect } from 'react';
import { Typography, Grid, makeStyles, Box } from '@material-ui/core';
import Dialog from './Dialog';
import personService from '../services/persons';
import PersonForm from './PersonForm';
import Persons from './Persons';
import Notification from './Notification';

const useStyles = makeStyles((theme) => ({
   items: {
      display:'flex',
      justifyContent: 'center',
      flexDirection: 'row',
   },
   dialog:{
    paddingTop:'1rem',   
  },
   
}));

export default function () {

  const classes = useStyles();

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchName, setSearchName] = useState('');
  const [showAll, setShowAll] = useState(true);
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons);
      });
  }, []);

  const personIsAdded = (name, data) => {
    let isAdded = data.find(el => el.name === name);
    if (isAdded === undefined) {
      return false;
    }
    return true;
  } 

  const addContact = event => {
    event.preventDefault();
    // Check if the contact already exists
    const toUpdate = persons.filter(p => {
      return p.name.includes(newName);
    });
    if (toUpdate.length === 1) {
      const confirm = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`);
      if (confirm) {
        personService
          .update(toUpdate[0].id, {
            ...toUpdate[0],
            number: newNumber
          })
          .then(updatedPerson => {
            let updatedState = persons.filter(p => p.id !== updatedPerson.id);
            updatedState = [...updatedState, updatedPerson];
            setPersons(updatedState);
            setNewName('');
            setNewNumber('');
            setNotificationMessage(`Added ${updatedPerson.name}`);
            setTimeout(() => {
              setNotificationMessage(null)
            }, 2000);
          })
          .catch(error => {
            setErrorMessage(`Information of ${newName} has already been removed from server`);
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000);
          })
      }
    } else {
      // if not, save the person
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }

      personService
        .create(personObject)
        .then(returnedNote => {
          if (personIsAdded(newName, persons)) {
            alert(`${newName} is already added to phonebook`);
          }
          else {
            setPersons([...persons, { name: newName, number: newNumber }]);
          }
          setNotificationMessage(`Added ${newName}`);
          setTimeout(() => {
            setNotificationMessage(null)
          }, 2000);
          setNewName('');
          setNewNumber('');
        })
        .catch(error => {
          setErrorMessage(`Information of ${newName} has already been removed from server`);
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000);
        })
    }
  }
  
  const handleNameChange = event => {
    setNewName(event.target.value);
  }

  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  }

  const cancel = () => {
    setNewName('');
    setNewNumber('');
  };

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
          <Grid container={true} className={classes.items}>
            <Grid item={true}>
              <PersonForm
                handleOnSubmit={addContact}
                newName={newName}
                handleOnNameChange={handleNameChange}
                newNumber={newNumber}
                handleOnNumberChange={handleNumberChange}
                cancel = {cancel}
              />
            </Grid>
          </Grid>
          <Box className={classes.dialog}>
             <Dialog 
             contactsToShow={contactsToShow}
             handleSearchName = {handleSearchName}
             deletePerson = {deletePerson}
             persons = {persons}
             />
          </Box>
          <Notification type={"error"} message={errorMessage} />
        </div>
      );
    }

