import React from 'react';
import { Box } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: '25ch',
  },
}));

const Filter = ({ onChangeHandler}) => {

  const classes = useStyles();
  return(
    <Box style={{paddingRight:'1rem'}}>
      <FormControl className={clsx(classes.margin, classes.textField)}>
      <InputLabel htmlFor="standard-adornment">Search</InputLabel>
      <Input
        onChange={onChangeHandler}
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon color={'secondary'}/>
          </InputAdornment>
        }
      />
      </FormControl>
    </Box>
  );
}

export default Filter;