import React, { Component } from 'react'
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';


export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <AddTodo/>
        <Todos/>
      </div>
    )
  }
}
