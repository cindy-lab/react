import React, {useState, Component} from 'react';
// import './component/StarFeed.scss';
import Header1 from './component/Header1';
import StarPage from './component/StarPage'
import profile from './component/ProfilePage';
// import uploadPhoto from './component/uploadPhoto';

import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom';


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
          <Route exact path = "/landing" component = {Header1}/>
        </Switch>
        </div>
      </Router>
    )
   }
  }
  

 