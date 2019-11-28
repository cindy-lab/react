import StarFeed from './component/StarFeed';
import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(3),
      backgroundColor:"white",     
      left:600,
      borderRadius:4
    },
    button: {
      marginLeft: theme.spacing(75),
      top:15,
    },
  }),
);

export default function Login() {
  const classes = useStyles();
  const [goStarFeed, setStarFeed] = useState(0);

  if(!goStarFeed){
    return (
    <form className={classes.container}>
      <div>
        <TextField
        id="email/number"
        label="Email/phoneNumber"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        name="email"
        autoComplete="email"
        variant="filled"/>
        

        <TextField
        id="password"   
        label="Password"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="filled"
        type = "password"/>

        <Button variant="contained" color="white" 
        className={classes.button} onClick={() =>  setStarFeed(true)}>
        LOGIN
        </Button>
      </div>
    </form>
  );
  }
  else
  {
    return(<StarFeed />);
  }
}



