import React, {useState, Component} from 'react';
import './component/StarFeed.scss';
import { makeStyles } from '@material-ui/core/styles';
import Header1 from './component/Header1';
import Starfeed from './component/StarFeed'
import Signin from './Signup';
// import uploadPhoto from './component/uploadPhoto';

import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom';

// const useStyles = makeStyles(theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     marginTop:65,
//   },
// }));

export default class App extends Component {

  // const [goStarFeed, setStarFeed] = useState(0);
  // const handleChange = name => event => {
  //   setValues({ ...values, [name]: event.target.value });
  // };
  // if(!goStarFeed){
   render(){
    return (
      //  <div id="background"></div>
          // <form className={classes.container} noValidate autoComplete="off">
          // <Header1 position="fixed"/>    
          <Router>
            <div>
            <Switch>
              <Route exact path = "/" component={Header1}/>
              <Route path = "/starfeed" component={Starfeed}/>

            </Switch>
            </div>
          </Router>
          
          // </form>
        )
   }
  }
  

