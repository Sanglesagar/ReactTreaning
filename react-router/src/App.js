import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Redirect, Prompt } from "react-router-dom";
import Route from "react-router-dom/Route";

const User = (params) =>{
  return(<h4>Welcome {params.username}</h4>);
}

class App extends Component {
  
  state={
    loggedIn: false
  }

  loginHandler=()=>{
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }))
  }

  render(){
    return (
      <Router>
        <div className="App">
        <ul>
          <li>
          <NavLink to="/" exact activeStyle={{color:'green'}}>Home</NavLink>
          </li>
          <li>
          <NavLink to="/about" exact activeStyle={{color:'green'}}>About</NavLink>
          </li>
          <li>
          <NavLink to="/user/Sagar" exact activeStyle={{color:'green'}}>user</NavLink>
          </li>
        </ul>

        <Prompt 
          when={!this.state.loggedIn}
          message={(location)=>{
            return location.pathname.startsWith('/user') ? 'Are You Sure' : true        
          }}
        />
        
        <input type="button" onClick={this.loginHandler.bind(this)} value ={this.state.loggedIn ? 'LogOut' : 'Login'} />

          <Route path="/" exact={true} render={
            ()=>{
              return(<h1>Home</h1>);
            }
          } />     

          <Route path="/about" render={
            ()=>{
              return(<h1>About</h1>);
            }
          } />     
         <Route path="/user/:username" render={({match})=>(
           this.state.loggedIn ? (<User username={match.params.username}/>) : (<Redirect to="/" />)
         )}/>     
        </div>
      </Router>
    );
  }
}

export default App;
