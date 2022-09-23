import React from 'react';
import './App.css';

const MyInput = (props) => {
  return (
    <input ref={props.inputRef} type="text"/>
  )
}

const FunctCustComp =() => {
  let inputRef = null;

  const onClick = () => {
    inputRef.focus();
  }

  return(
    <div>
      <span>My Input: </span>
      < MyInput inputRef={(input)=>{inputRef = input}}/>
      <input type="submit" value="Submit" onClick = {onClick} />
    </div>
  )
}

class App extends React.Component {

  onClick = () =>{
    alert(`yey: ${this.firstName.value} submitted!!` );
  }
  onKeyUp = (target,e) => {
    if(e.keyCode === 13){
      
      switch(target){
        case 'firstName' :
          this.lastName.focus();
          break;
        case 'lastName':
          this.address.focus();
          break;
        case 'address' :
          this.age.focus();
          break;
        case 'age' :
          this.submit.focus();
          break;
        default:
          this.firstName.focus();
      }

    }
  }

  render(){
    return (
      <div className="App">
        <FunctCustComp />
        <div>
          <span>First Name: </span>
          <input ref={(input)=>{this.firstName = input}} onKeyUp={this.onKeyUp.bind(this, 'firstName')} type="text" />
        </div>
        <div>
          <span>Last Name: </span>
          <input  ref={(input)=>{this.lastName = input}} onKeyUp={this.onKeyUp.bind(this, 'lastName')} type="text" />
        </div>
        <div>
          <span>address: </span>
          <input ref={(input)=>{this.address = input}} onKeyUp={this.onKeyUp.bind(this, 'address')} type="text" />
        </div>
        <div>
          <span>Age: </span>
          <input ref={(input)=>{this.age = input}} onKeyUp={this.onKeyUp.bind(this, 'age')} type="text" />
        </div>
        <input type="button"  ref={(input)=>{this.submit = input}} value="Submit" onClick={this.onClick}/>
      </div>
    );
  }
  
}

export default App;
