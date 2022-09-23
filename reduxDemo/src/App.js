import React from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component {

  render(){
    return (
      <div className="App">
       <div>Age: <span>{this.props.age}</span></div>
       <button onClick={this.props.ageUp} >Age Up</button>
       <button onClick={this.props.ageDowm}>Age Down</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    age:state.age
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    ageUp: () => dispatch({type:'AGE_UP'}),
    ageDowm: () => dispatch({type:'AGE_DOWN'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
