import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import starfeed from './component/StarFeed';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom';
import {userRegistration, userValidation} from './component/Router';
import { REGISTRATION_MESSAGE, ERROR_IN_REGISTRATION } from './message';
import { log } from 'util';
import Message from './elements/Messages';
import Error from './elements/Error';




class SignUp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      // register : false,
      // error: false,
      Fname : "",
      Mname: "",
      Lname: "",
      pNumber: "",
      Email: "",
      password: "",
      verifyPassword: "",
      Birthday : {
        month : "",
        day : "",
        year : ""
      }
    }
  }
  onChange = e => {
    this.setState ({[e.target.id]:e.target.value});
  };
  handleOnBlur = async e => {
    this.setState({
      Email : e.target.value
    });
    const data = {
      Email : this.state.Email
    };
    const isUserTaken = await userValidation(data);

    isUserTaken === 204 
    ? this.setState({Email_taken : true})
    : this.setState({Email_taken : false});
  }
  onSubmit = async e => {
    e.preventDefault();
    const data = {
      FirstName : this.state.Fname,
      MiddleName : this.state.Mname,
      LastName : this.state.Lname,
      phoneNumber : this.state.pNumber,
      Email : this.state.Email,
      Password : this.state.password,
      Birthday : {
        month : this.state.month,
        day : this.state.day,
        year : this.state.year
      }
    };
    const registrationStatus = await userRegistration(data);
    
    if(registrationStatus === 200){
      console.log("Successful");
      this.setState({
        
        Fname : "",
        Mname: "",
        Lname: "",
        pNumber: "",
        Email: "",
        password: "",
        verifyPassword: "",
        Birthday : {
          month : "",
          day : "",
          year : ""
        },
        
        // register : true,
        // error: false
      
      },
      alert("Registered Successfully"));
      
    }else {
      alert("Please fill up everything");
      // this.setState({
      //   error : true,
      //   register : false
      // });
    }
  };

  
 render(){
  const root = {
    height: '100vh',
    
  }
  const image = {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    // backgroundColor:
    //   theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // height: '80%',
  }
  const paper = {
    // margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // paddingTop : 2,
    // height: 'calc(10%)',
  
  }
  const avatar = {
    // margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.main,
    // color = 'red',
    margin:'15%',
    backgroundColor: "Blue"
    
  }
  const form = {
    width: '80%', // Fix IE 11 issue.


  }
  const title = {
    // paddingTop : 50,
    color : "blue"
  }
  const footer = {
    marginBottom: '18%',
  }
  const submit =  {
    // margin: theme.spacing(3, 0, 2),

  }
  // const height = 55

 
  return (
    <Grid container component="main" style={root} >
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} style={image} />
      <Grid item xs={12} sm={8} md={5}  component={Paper} elevation={6} square>
        <div style={paper}>
          <Avatar style={avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={title} >
            Create an Account
          </Typography>
          <form style={form} noValidate onSubmit = {this.onSubmit} >
          <TextField 
          // className={clsx(classes.textField, classes.dense)}
          // style={{ height }}
        id="outlined-dense"
        label="Firstname"
        value={this.state.Fname}
        onChange = {e => this.setState({Fname : e.target.value})}
        margin="normal"
        variant="outlined"
        required
        fullWidth
        autoFocus/>
          <TextField
          // className={clsx(classes.textField, classes.dense)}
          // style={{ height }}
        id="outlined-dense"
        label="Middlename"
        value = {this.state.Mname}
        onChange = {e => this.setState({Mname : e.target.value})}
        margin="normal"
        variant="outlined"
        required
        fullWidth
        autoFocus/>
            <TextField
          // className={clsx(classes.textField, classes.dense)}
          // style={{ height }}
        id="outlined-dense"
        label="Lastname"
        value={this.state.Lname}
        onChange = {e => this.setState({Lname : e.target.value})}
        margin="normal"
        variant="outlined"
        required
        fullWidth
        autoFocus/>
          <TextField
          // className={clsx(classes.textField, classes.dense)}
          // style={{ height }}
        id="outlined-dense"
        label="Phone Number"
        value={this.state.pNumber}
        onChange = {e => this.setState({pNumber : e.target.value})}
        margin="normal"
        variant="outlined"
        type="number"
        required
        fullWidth
        autoFocus/>
          <TextField
          // className={clsx(classes.textField, classes.dense)}
          // style={{ height }}
        autoComplete="email"
        id="outlined-dense"
        label="Email Address"
        value={this.state.Email}
        onChange = {e => this.setState({Email : e.target.value})}
        margin="normal"
        variant="outlined"
        type="email"
        required
        fullWidth
        autoFocus/>
        {/* <p>{user_name_taken}</p>
                <Form.Input
                  icon='mail'
                  iconPosition='left'
                  label='Email'
                  type='email'
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                  required

                /> */}
            <TextField
          // className={clsx(classes.textField, classes.dense)}
          // style={{ height }}
        autoComplete="password"
        id="outlined-dense"
        label="Password"
        value={this.state.password}
        onChange = {e => this.setState({password : e.target.value})}
        margin="normal"
        variant="outlined"
        type="password"
        required
        fullWidth
        autoFocus/>
        <TextField
          // className={clsx(classes.textField, classes.dense)}
          // style={{ height }}
        autoComplete="password"
        id="outlined-dense"
        label="Re-type Password"
        value={this.state.verifyPassword}
        onChange = {e => this.setState({verifyPassword : e.target.value})}
        margin="normal"
        variant="outlined"
        type="password"
        required
        fullWidth
        autoFocus/>
          <TextField
          variant="outlined"
          margin="normal"
          // required
          fullWidth
        id="date"
        label="Birthday"
        type="date"
        defaultValue="mm:dd:yy"
        // style={textField}
        InputLabelProps={{
          shrink: true,
        }}
<<<<<<< HEAD
        
      />   <Link to="/starfeed">    
           <Button onClick = {this.onSubmit}
              className = "button"
=======
      />   <Link to="/starfeed">   
           <Button
>>>>>>> 772eebfa9c9f49eff49db08574060c35269abe3c
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={footer}
            >
              Sign Up
            </Button>
            </Link>  
          </form>
          {/* {error && <Error message={ERROR_IN_REGISTRATION} />}
          {register && <Message message={REGISTRATION_MESSAGE} />} */}
        </div>
      </Grid>
    </Grid>
  );
}
}

export default SignUp;