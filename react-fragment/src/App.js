import React, { Component, Fragment } from 'react';
import './App.css';

// State less Component or arrow Function
const Temp = ()=>{
  return(
   <Fragment>
     <div>hiii</div>
      <div>Hello</div>
   </Fragment>
  );
}

class App extends Component {
 render(){
  return (
    <div className="App">
      <Temp />     
    </div>
  );
 }
}

export default App;
