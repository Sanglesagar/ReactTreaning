import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App(){
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/topics">Trending Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home(){
  return <h4>Home Tab</h4>
}

function About(){
  return <h4>About Tab</h4>
}

function Contact(){
  return <h4>Contact Tab</h4>
}

function Topics(){
  let match = useRouteMatch();

  return(
    <div>
      <h2>Trending Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props`}>Props</Link>
        </li>
        <li>
          <Link to={`${match.utl}/state`}>State</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please Select a topic</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic(){
  let {topicId} = useParams();
  return <h3>Requested Topic id : { topicId }</h3>
}