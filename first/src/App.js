import React, {useState, Component} from 'react';
import LandingPage from './LandingPage';
import StarPage from './StarPage';
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
  

