import React, {useState} from 'react';
import './component/StarFeed.scss';
import { makeStyles } from '@material-ui/core/styles';
import Header1 from './Header1';

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

  // const [goStarFeed, setStarFeed] = useState(0);
  // const handleChange = name => event => {
  //   setValues({ ...values, [name]: event.target.value });
  // };
  // if(!goStarFeed){
  return (
//  <div id="background"></div>
    // <form className={classes.container} noValidate autoComplete="off">
    <Header1 position="fixed"/>    
    // </form>
  )}

