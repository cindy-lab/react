import React, {useState, Component} from 'react';
<<<<<<< HEAD
import './component/StarFeed.scss';
import { makeStyles } from '@material-ui/core/styles';
import Header1 from './component/Header1';
import Starfeed from './component/StarFeed'
import Signin from './Signup';
// import uploadPhoto from './component/uploadPhoto';

=======
import LandingPage from './LandingPage';
import StarPage from './StarPage';
>>>>>>> 772eebfa9c9f49eff49db08574060c35269abe3c
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom';


export default class App extends Component {
   render(){
    return (
      <Router>
        <div>
        <Switch>
          <Route exact path = "/" component={LandingPage}/>
          <Route path = "/starfeed" component={StarPage}/>
        </Switch>
        </div>
      </Router>
    )
   }
  }
  

