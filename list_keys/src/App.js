import React from "react";
import User from "./components/users";
import UniqueId from "react-html-id";
import './App.css';

class App extends React.Component {

  constructor(){
    super();
    UniqueId.enableUniqueIds(this);
    this.state = {
      users:[
        {id:this.nextUniqueId(), name:"Sagar", age: 26},
        {id:this.nextUniqueId(), name:"Nikita", age:24},
        {id:this.nextUniqueId(), name:"Nitin", age:28},
        {id:this.nextUniqueId(), name:"Sindhu", age:48},
        {id:this.nextUniqueId(), name:"Surekha", age:25}
      ]
    };

  }

  deleteUser = (index, e) => {
    // here we create a copy of Users State 
    const users = Object.assign([], this.state.users);
    //get (delete) clicked element
    users.splice(index, 1);
    //set back to updated users copy in state 
    this.setState({users:users});
  }

  changeName = (id, e) => {
    // get index of element on using unique id
    const index = this.state.users.findIndex((user)=>{
      return user.id === id 
    });
    //create copy of selected element 
    const user = Object.assign({}, this.state.users[index]);
    // assign changes to the element 
    user.name = e.target.value;
    //now create copy of all Users State   
    const users = Object.assign([], this.state.users);
    //now assign updated element copy to this copy  
    users[index] = user;
    //set back Updated Users Copy in State
    this.setState({users:users});
  }

  // addUser = (event) => {
  //   // const {name, value}  = event.target;
  //   // const users = Object.assign([], this.state.users);
  //   this.setState({[event.target.name]:event.target.value})

  //   console.log(event);
  // }

  render(){
    return (
      <div className="App">
        {/* <form onSubmit={this.addUser}>
        <input name="name" type="text"></input>
        <input name="age" type="text"></input>
        <button>Add</button>
        </form> */}
        
        <ul>
          {this.state.users.map((user, index)=>{
          // return <li age={user.age}>{user.name}</li>
          return <User age={user.age} key={user.id}
          delEvent={this.deleteUser.bind(this, index)} 
          changeEvent={this.changeName.bind(this, user.id)}>{user.name}</User>
        }
          )}
          
        </ul>
      </div>
    );
  }
}

export default App;
