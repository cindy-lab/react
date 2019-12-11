import React, {useState, Component} from 'react';
// import './component/StarFeed.scss';
import { makeStyles } from '@material-ui/core/styles';
import Header1 from './component/Header1';
import Landing from './component/Header1';
import Starfeed from './component/StarFeed'
import Signin from './Signup';
import imageUpload from './component/ImageUpload';
import StarPage from './component/StarPage'
import profile from './component/ProfilePage';
// import uploadPhoto from './component/uploadPhoto';

import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom';
import StarFeed from './component/StarFeed';


export default class App extends Component {

  constructor(props){
    super(props)
    this.state ={
      user :null,
      auth:false
    }
  }
   render(){
    return (
      <Router>
        <div>
        <Switch>
          <Route exact path = "/" component={Header1}/>
          <Route exact path = "/starfeed" component={StarPage}/>
          <Route exact path = "/profile" component = {profile}/>
          <Route exact path = "/landing" component = {Landing}/>
        </Switch>
        </div>
      </Router>
    )
   }
  }
  

 