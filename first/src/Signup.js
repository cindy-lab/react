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
import {BrowserRouter as Router,Switch,Link,Route,Redirect} from 'react-router-dom';
import {userRegistration, userValidation} from './component/Router';
import { REGISTRATION_MESSAGE, ERROR_IN_REGISTRATION } from './message';
import { log } from 'util';
import Message from './elements/Messages';
import Error from './elements/Error';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';




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
      }, 
      toDashboard : false
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
        toDashboard : true
        
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
  if(this.state.toDashboard === true){
    return <Redirect to="/starfeed" />;
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
          <ValidatorForm
                ref="form"
                onSubmit={this.onSubmit}
                onError={errors => console.log(errors)}
            >
            </ValidatorForm>
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
          errorText={"invalid email"}
          // error={errors.email && touched.email}
          id="outlined-dense"
          label="Email Address"
          value={this.state.Email}
          onChange = {e => this.setState({Email : e.target.value})}
          margin="normal"
          variant="outlined"
          type="email"
          required
          validators={['required', 'isEmail']}
          errorMessages={['this field is required', 'email is not valid']}
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
                error={this.state.password != this.state.verifyPassword}
                autoComplete="password"
                id="outlined-dense"
                label="Re-type Password"
                value={this.state.verifyPassword}
                onChange = {e => this.setState({verifyPassword : e.target.value})}
                margin="normal"
                variant="outlined"
                type="password"
                required
                errorText={"Password doesn`t match"}
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
          
        />  
        {/* <Link to="/imageupload">     */}
            <Button onClick = {this.onSubmit}
                className = "button"
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                // disabled={this.state.Fname.length<=0 || this.state.Lname <= 0 || this.state.Mname <=0 || this.state.Email <=5 || this.state.pNumber<=0}
                disabled ={this.state.password != this.state.verifyPassword}
                style={footer}
              >
                Sign Up
              </Button>
              {/* </Link>   */}
          </form>
          {/* {error && <Error message={ERROR_IN_REGISTRATION} />}
          {register && <Message message={REGISTRATION_MESSAGE} />} */}
        </div>
      </Grid>
    </Grid>
  );
}
}

const root = {
  height: '100vh',
  
}
const image = {
  backgroundImage: 'url(data:image/png;base64,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)',
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

export default SignUp;