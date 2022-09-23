import React, {Component} from "react";
import './App.css';

class App extends Component {
  
  state = {
    name: "Sagar"
  }

  chnageName = (newName) =>{
    this.setState({
        name: newName
    })
  }

  getName =(val)=>{
    this.setState({
      name: val.target.value
    });
  }
  
  render(){
    return (
      <div className="App">
        <br></br>
        <p>Name Is {this.state.name}</p>
        <br></br>
        <button onClick={()=>this.chnageName('Annonimus Call')}>Annonimus Function</button>
        <button onClick={this.chnageName.bind(this, 'bind Function')}>Bind Function</button>
        <br />
        <input type="text" name="name" onChange={this.getName} value={this.state.name}/>
      </div>
    );
  }
}

export default App;
