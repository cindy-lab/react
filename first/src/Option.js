import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(theme => ({
//   //future use
// }));

export default function Option() {
//   const classes = useStyles();
  return (
    <div>
      <Button variant="contained" >
      <HomeIcon/>
      <ListItemText primary='StarFeed'/>
      </Button>
    </div>
  );
}