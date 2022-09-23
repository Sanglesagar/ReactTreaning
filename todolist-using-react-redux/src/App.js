import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions/actions';

import  AddTodo  from './components/AddTodo';
import  TodoList  from './components/TodoList';
import './App.css';

class App extends Component {
  render() {

    const {dispatch, visibleTodos} = this.props

    return (
      <div className="App">
        <AddTodo onAddClick = {text => dispatch(addTodo(text))} />
        <TodoList todos = {visibleTodos} />        
      </div>
    );
  }
}

function select(state) {
  return {
    visibleTodos: state.todos
  }
}

export default connect(select)(App);
