import StarFeed from './component/StarFeed';
import MenuItem from '@material-ui/core/MenuItem';
import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';

const currencies = [
    {
      value: 'Month1',
      label: 'January',
    },
    {
      value: 'Month2',
      label: 'February',
    },
    {
      value: 'Month3',
      label: 'March',
    },
    {
      value: 'Month4',
      label: 'April',
    },
    {
      value: 'Month5',
      label: 'May',
    },
    {
      value: 'Month6',
      label: 'June',
    },
    {
      value: 'Month7',
      label: 'July',
    },
    {
      value: 'Month8',
      label: 'August',
    },
    {
      value: 'Month9',
      label: 'September',
    },
    {
      value: 'Mont10',
      label: 'October',
    },
    {
      value: 'month11',
      label: 'November',
    },
    {
      value: 'month12',
      label: 'December',
    },
  ];
const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(100),
        marginRight: theme.spacing(10),
        position: "relative",
    },
    button: {
        marginLeft: theme.spacing(100),
        marginRight: theme.spacing(1),
    },
    menu: {
        width: 200,
        marginLeft:100,
        marginRight:10,
    },
  }),
);

export default function Signup() {
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
    <form className={classes.container} noValidate autoComplete="off">
      <div>
        <TextField
        id="outlined-dense"
        label="Firstname"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"/>

        <TextField
        id="outlined-dense"
        label="Middlename"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"/>

        <TextField
        id="outlined-dense"
        label="Lastname"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"/>

        <TextField
        id="outlined-dense"
        label="Phone number"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"/>

        <TextField
        id="outlined-dense"
        label="Email"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
        type = "email"/>

        <TextField
        id="outlined-dense"
        label="Password"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
        type = "password"/>

        <TextField
        id="outlined-dense"
        label="Re-type Password"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
        type = "password"/>

        <TextField
        id="outlined-select-currency"
        select
        label="Birthmonth"
        className={clsx(classes.textField)}
        value={values.currency}
        onChange={handleChange('currency')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="select your Birthmonth"
        margin="normal"
        variant="outlined">
        {currencies.map(option => (
        <MenuItem key={option.value} value={option.value}>
            {option.label}
        </MenuItem>))}      
      </TextField>

        <Button variant="outlined" color="primary" className={classes.button} onClick={() =>  setStarFeed(true)}>
        SIGNUP
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

