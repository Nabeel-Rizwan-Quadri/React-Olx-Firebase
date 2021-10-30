import Auth from "../views/Auth";
import AllPosts from "../views/AllPosts";
import Dashboard from "../views/Dashboard";
import EditInfo from "../views/EditInfo";
import CreateAd from "../views/Createad";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function route() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/auth">Auth</Link>
            </li>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/createad">Create Ad</Link>
            </li>
            <li>
              <Link to="/editinfo">Edit info</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/allposts">
            <AllPosts />
          </Route>
          <Route path="/createad">
            <CreateAd />
          </Route>
          <Route path="/editinfo">
            <EditInfo />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
