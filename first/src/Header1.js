import React from 'react';
import {makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import Signup from './Signup';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    apBar: {
      top: 'auto',
      bottom: 0,
    },
  
    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: '0 auto',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(2),
      backgroundColor:"white",     
      borderRadius:4,
    },
  }));

  export default function ButtonAppBar() {
    const classes = useStyles();
  return (
    <div className={classes.root}>
    <div>
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Stargaze.com
        </Typography>
        <form className={classes.container}>
      <div>
        <TextField
        id="email/number"
        label="Email/Number"
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
      </div>
    </form>
        <Button variant="contained" color="white" >Login</Button>
      </Toolbar>
    </AppBar>
  </div>
  <Signup />
<AppBar position="fixed" color="primary" className={classes.apBar}>
        <Toolbar>
          <Typography>Stargaze.com</Typography>
        </Toolbar>
      </AppBar>
      </div>
  );
}