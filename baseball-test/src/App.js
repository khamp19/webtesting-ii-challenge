import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    isOpen: false,
    isLocked: true
  }

  render(){
    return (
      <div className="App">
        <p>The door is {this.state.isOpen ? 'open' : 'closed'}</p>
        <p>The door is {this.state.isLocked ? 'locked' : 'unlocked'}</p>
      </div>
    );
  }
}

export default App;
