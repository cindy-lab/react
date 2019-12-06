import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import Signup from '../Signup';
import { getUser, userLogin } from './Router';
import { log } from 'util';
import Starpage from './StarPage';
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom';
// import { BrowserRouter as Link } from 'react-router-dom';
// import Message from '../elements/Message';
// import Error from '../elements/Error';
import starfeed from './StarFeed';
// import { LOGIN_MESSAGE, ERROR_IN_LOGIN } from './message';
import axios from 'axios';
const base = 'http://localhost:4000/user/';


const styles = theme => ({

});
const root = {
  flexGrow: 1,
}
const menuButton = {
  // marginRight: theme.spacing(2),
}
const title = {
  flexGrow: 1,
}
const apBar = {
  top: 'auto',
  bottom: 0,
}

const fabButton = {
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
}
const textField = {
  // marginLeft: theme.spacing(1),
  // marginRight: theme.spacing(2),
  backgroundColor: "white",
  borderRadius: 4,
  marginLeft: 4,
  marginRight: 4

}
class Header1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: '',
      error: false,
      loginSuccess: false,
      user: [],
    }
  }
  // onChange = (e) => {
  //   this.setState({
  //     [e.target.id] : e.target.value
  //   })
  // }
  handleOnClick = async e => {
    axios.get(`${base}getUser/` + this.state.email)
      .then(res => {
        if (res.data != null) {
          this.setState({ loginSuccess: false, error: true, user: res.data })
          console.log(this.state.user);

        } else {
          this.setState({ loginSuccess: true, error: false })
        }
      })
    // console.log("handle");
    // const data = {
    //   Email : this.state.email,
    // password : this.state.password
    // };

    // console.log(data);

    // const user = await getUser(data);
    // // console.log("handle2");
    // // this.state["user"] = user.data
    // // this.setState({ user : user.data })
    // console.log(this.state);
  }

  //login click
  onSubmit = async e => {
    e.preventDefault();
    const data = {
      Email: this.state.email,
      Password: this.state.password
    };
    axios.post(`${base}login`, data)
      .then(res => {
        if (res.status != 200) {
          this.setState({
            error: true,
            loginSuccess: false,
          });
        } else {
          this.setState({
            loginSuccess: true,
            error: false
          });
        }
      })

    // const loginResult = await userLogin(data);

    // if (loginResult != 200) {
    //   this.setState({
    //     loginSuccess: true,
    //     error : false
    //   });
    // }else {
    //   this.setState({
    //     error : true,
    //     loginSuccess : false
    //   });
    // }
  }
  render() {
    if (this.state.loginSuccess === true) {
      return <Redirect to="/starfeed" />;
      console.log(this.state.user);

    } else {
      // login = () => {
      //     const { loginSuccess, error} = this.state;
      //     if (!loginSuccess){
      //       console.log("Cannot login");
      return (
        <div style={root}>
          <div>
            <AppBar position="fixed">
              <Toolbar>
                <Typography variant="h6" style={title}>
                  Stargaze.com
        </Typography>
                <form >
                  <div>
                    <TextField
                      id="email"
                      label="Email"
                      style={textField}
                      // className={clsx(classes.textField, classes.dense)}
                      margin="dense"
                      name="email"
                      autoComplete="email"
                      value={this.state.email}
                      onChange={e => this.setState({ email: e.target.value })}
                      variant="filled" />

                    <TextField
                      id="password"
                      label="Password"
                      style={textField}
                      // className={clsx(classes.textField, classes.dense)}
                      margin="dense"
                      variant="filled"
                      // value={this.state.password}
                      onChange={e => this.setState({ password: e.target.value })}
                      type="password" />
                  </div>
                </form>
                <Link to="/">
                  <Button variant="contained" color='Blue' onClick={(e) => { this.onSubmit(e); this.handleOnClick() }}  >Login</Button>
                </Link>
              </Toolbar>
            </AppBar>
          </div>
          <Signup />
          <AppBar position="fixed" color="primary" style={apBar}>
            <Toolbar>
              <Typography>Stargaze.com</Typography>
            </Toolbar>
          </AppBar>
          {/* {loginSuccess && <Message message={LOGIN_MESSAGE} />}
      {error && <Error message={ERROR_IN_LOGIN} />} */}
        </div>
      )
      // }else {
      //   return(
      //     // <div>

      //     // <Link  to="/starfeed">
      //     // </Link>
      //     // </div>
      //     <starfeed user={this.state.user}></starfeed>
      //   )
      // }
    }
    // else if (loginSuccess) {
    //   console.log("Successfully login ");
    //   return (
    //     < Starpage user={this.state.user}></Starpage>
    //   )

    // }
  }
  // render () {
  //   return (

  //   )
  // }
  // render(){
  //   return(
  //     <div>

  //     </div>
  //   )
  // }
}


export default withStyles(styles)(Header1);