import React, {useState} from 'react';
import './component/StarFeed.scss';
import Signup from './Signup';
import Login from './Login';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop:65,
  },
}));

export default function App() {

  const [goStarFeed, setStarFeed] = useState(0);
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    age: '',
    currency: 'Month1',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  if(!goStarFeed){
  return (
  <div id="background">
    <form className={classes.container} noValidate autoComplete="off">
    <Login position="fixed"/>
    <br></br>
    <Signup position="absolute"/>
    </form>
    </div>
  )}
}
