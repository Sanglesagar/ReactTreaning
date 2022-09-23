import React, {Component} from 'react'
import './App.css';
import Parent from "./components/parentToChild/parent";

class App extends Component {

  state={
    title:'Placeholder Title'
  }

  changeTitle = (val) => {
    this.setState({title: val})
  }

  render(){
    return (
      <div className="App">
        {/* bind Function */}
        <Parent changeTheWorldEvent={this.changeTitle.bind(this, 'New Title')} 
          keepTheWorldEvent = {this.changeTitle.bind(this,'Keep World')}
        title={this.state.title}/>    

        {/* Annonimus Function */}
        {/* <Parent doneWhatever={()=>this.changeTitle('Annonimus Title')} title={this.state.title}/> */}
      </div>
    );
  }
}

export default App;
