import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Signup() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create an Account
          </Typography>
          <form className={classes.form} noValidate>
          <TextField
          className={clsx(classes.textField, classes.dense)}
        id="outlined-dense"
        label="Firstname"
        margin="normal"
        variant="outlined"
        required
        fullWidth
        autoFocus/>
          <TextField
          className={clsx(classes.textField, classes.dense)}
        id="outlined-dense"
        label="Middlename"
        margin="normal"
        variant="outlined"
        required
        fullWidth
        autoFocus/>
            <TextField
          className={clsx(classes.textField, classes.dense)}
        id="outlined-dense"
        label="Lastname"
        margin="normal"
        variant="outlined"
        required
        fullWidth
        autoFocus/>
          <TextField
          className={clsx(classes.textField, classes.dense)}
        id="outlined-dense"
        label="Phone Number"
        margin="normal"
        variant="outlined"
        type="number"
        required
        fullWidth
        autoFocus/>
          <TextField
          className={clsx(classes.textField, classes.dense)}
        autoComplete="email"
        id="outlined-dense"
        label="Email Address"
        margin="normal"
        variant="outlined"
        type="email"
        required
        fullWidth
        autoFocus/>
            <TextField
          className={clsx(classes.textField, classes.dense)}
        autoComplete="password"
        id="outlined-dense"
        label="Password"
        margin="normal"
        variant="outlined"
        type="password"
        required
        fullWidth
        autoFocus/>
        <TextField
          className={clsx(classes.textField, classes.dense)}
        autoComplete="password"
        id="outlined-dense"
        label="Re-type Password"
        margin="normal"
        variant="outlined"
        type="password"
        required
        fullWidth
        autoFocus/>
          <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
        id="date"
        label="Birthday"
        type="date"
        defaultValue="mm:dd:yy"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />   <Link to="/starfeed">   
           <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            </Link>  
          </form>
        </div>
      </Grid>
    </Grid>
  );
}