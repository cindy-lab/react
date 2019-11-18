import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import { settings } from "cluster";
import Skeleton from '../Skeleton';

const routes = [
    {
      path: "./component/StarFeed",
      component:  <StarFeed/>
    },
    {
        path: "./component/Stats",
        component:  <Stats/>
    },
    {
        path: "./component/Settings",
        component:  <Settings/>
    }
  ];
  export default function RouteConfigExample() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/tacos">Tacos</Link>
            </li>
            <li>
              <Link to="/sandwiches">Sandwiches</Link>
            </li>
          </ul>
  
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </div>
      </Router>
    );
  }