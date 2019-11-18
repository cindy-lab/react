import React, {useState} from 'react';
import './component/StarFeed.scss';
import Signup from './Signup';
import Login from './Login';
import { makeStyles } from '@material-ui/core/styles';
<<<<<<< HEAD
=======
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import signInUp from './component/signInUp';


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
>>>>>>> d67f3c9ffea92e8bd43eefd782dd15c6007be325

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
<<<<<<< HEAD
    <Signup position="absolute"/>
    </form>
    </div>
  )}
=======
      <TextField
        id="outlined-dense"
        label="Firstname"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
      />
      <TextField
        id="outlined-dense"
        label="Middlename"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
      />
      <TextField
        id="outlined-dense"
        label="Lastname"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
      />
      <TextField
        id="outlined-dense"
        label="Phone Number"
        type="string"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
      />
       <TextField
        id="outlined-dense"
        label="Email"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
        type = "email"
      />
       <TextField
        id="outlined-dense"
        label="Password"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
        type = "password"
      />
       <TextField
        id="outlined-dense"
        label="Re-type Password"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
        type = "password"
      />

      
      <TextField
        id="outlined-select-currency"
        select
        label="Birthmonth"
        className={classes.textField}
        value={values.currency}
        onChange={handleChange('currency')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="select your Birthmonth"
        margin="normal"
        variant="outlined"
      >
        {currencies.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Button variant="contained" color="primary" className={classes.button} onClick={() =>  setgoHome(true)}>
        Sign in
      </Button>
    </form>
    </div>
  )}
  else  {
    return(
      <Home/>
    )
  }
>>>>>>> d67f3c9ffea92e8bd43eefd782dd15c6007be325
}
