import React, { Component } from 'react';
import DoorDisplay from './example/DoorDisplay.js';
import Dashboard from './Dashboard';
import './App.css';


class App extends Component {
  render(){
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default App;
