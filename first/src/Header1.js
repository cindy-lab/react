import React, {useState} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import GradeIcon from '@material-ui/icons/Grade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Home from './component/Home';


const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    fontSize:30,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 400,
      marginRight: 100,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    position: "relative",
    backgroundColor:"white",
    borderRadius:5,
    right:1,
    left:500,
  },
  button: {
    marginLeft:1150,
    position: "absolute",
  },
}));


export default function PrimarySearchAppBar() {
  const [values, setValues] = React.useState({
    name: '',
    password:'',
  });
  const [goHome, setHome] = useState(false);

  //the email/# calling the values
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  //the password calling the values
  const handleChange1 = password => event => {
    setValues({ ...values,[password]: event.target.value})
  }
  const classes = useStyles();

  //if goHome is false it will not proceed if true it will go to the dashboard
  if(!goHome){
  return (
    <div >
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            size="large"
            aria-label="open drawer"
          >
            <GradeIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Stargaze
          </Typography>
          <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="filled-name"
            label="email or phone number"
            className={classes.textField}
            value={values.name}
            onChange={handleChange('name')}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-name"
            label="password"
            type="password"
            className={classes.textField}
            value={values.password}
            onChange={handleChange1('password')}
            margin="normal"
            variant="filled"
          />
          </form>
          <Button variant="contained" color="tertiary" className={classes.button} onClick={() => setHome(true)}>
            Sign in
          </Button>

          <div className={classes.sectionMobile}>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );}
  else{
    return(
      <Home/>
    )
  }
}
