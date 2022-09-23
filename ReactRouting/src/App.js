import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './component/home';
import About from './component/about';
import Contact from './component/contact';


class App extends React.Component{
  render(){
    return(
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
         
        </div>
        <p>Its a out Side section</p>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/contact" component={Contact}></Route>
          </Switch>
      </Router>
    );
  }
}
export default App;