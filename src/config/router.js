import Auth from "../views/Auth";
import AllPosts from "../components/AllPosts";
import Dashboard from "../views/Dashboard";
import EditInfo from "../views/EditInfo";
import CreateAd from "../views/Createad";
import Details from "../components/Details";
import CurrentUserAds from "../views/CurrentUserAds";
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { useState, useEffect } from 'react'

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

export default function App() {
  const [isLoading, setLoading] = useState(true)
  const [user, setUser] = useState()
  const auth = getAuth()

  useEffect(() => {
    onAuthStateChanged(auth, userData => {
      setUser(userData)
      setLoading(false)
    })
  }, [])

  if(isLoading) return <img alt="loading gif" width="1500" src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif" />
 

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
            {ProtectedRoute(!user, <Auth />, '/')}
          </Route>
          <Route path="/allposts">
            {ProtectedRoute(user, <AllPosts />)}
          </Route>
          <Route path="/createad">
            {ProtectedRoute(user, <CreateAd user={user}/>)}
          </Route>
          <Route path="/editinfo">
            {(ProtectedRoute(user, <EditInfo />))}
          </Route>
          <Route path="/currentuserads">
            {(ProtectedRoute(user, <CurrentUserAds />))}
          </Route>
          <Route exact path="/details/:adId">
            {ProtectedRoute(user,  <Details />)}
          </Route>
          <Route exact path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function ProtectedRoute(user, component, redirectTo='/auth'){
  //if user is true or not
  //send to compoenet
  // else redirect to
  return user ? component : <Redirect to={redirectTo} />
}
