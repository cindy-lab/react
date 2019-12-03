import React, {useState, Component} from 'react';
import './component/StarFeed.scss';
import { makeStyles } from '@material-ui/core/styles';
import Header1 from './component/Header1';
import Starfeed from './component/StarFeed'
import Signin from './Signup';
import imageUpload from './component/ImageUpload';
import StarPage from './component/StarPage'
// import uploadPhoto from './component/uploadPhoto';

import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom';
import StarFeed from './component/StarFeed';


export default class App extends Component {
   render(){
    return (
      <Router>
        <div>
        <Switch>
          <Route exact path = "/" component={Header1}/>
          <Route path = "/starfeed" component={StarPage}/>
          <Route path = "/imageupload" component={imageUpload}/>
        </Switch>
        </div>
      </Router>
    )
   }
  }
  

 