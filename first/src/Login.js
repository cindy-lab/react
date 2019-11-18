import StarFeed from './component/StarFeed';
import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      backgroundColor:"lightgray",      
      left:600,
    },
    button: {
      marginLeft: theme.spacing(75),
      top:10,
    },
  }),
);

export default function Login() {
  const classes = useStyles();
  const [goStarFeed, setStarFeed] = useState(0);

  if(!goStarFeed){
    return (
    <form className={classes.container} noValidate autoComplete="off">
      <div>
        <TextField
        id="outlined-dense"
        label="Username"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"/>

        <TextField
        id="outlined-dense"
        label="Password"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
        type = "password"/>

        <Button variant="outlined" color="primary" className={classes.button} onClick={() =>  setStarFeed(true)}>
        LOGIN
        </Button>
      </div>
    </form>
  );
  }
  else
  {
    return(<StarFeed/>);
  }
}

