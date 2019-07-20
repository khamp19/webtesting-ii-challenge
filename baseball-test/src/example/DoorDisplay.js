import React, { Component } from 'react';

class DoorDisplay extends Component {
  state = {
    isOpen: false,
    isLocked: true
  }

  toggleOpen = () => {
    let current = !this.state.isOpen;
    this.setState({ isOpen: current })
  }

  toggleLock = () => {
    let current = !this.state.isLocked;
    this.setState({ isLocked: current})
  }

  messageUser = () => {
    alert('hi!')
  }

  render() {
    return (
      <div className="test-example-code">
        <h2>Testing Example</h2>
        <p>The door is {this.state.isOpen ? 'open' : 'closed'}</p>
        <button className="open-btn" onClick={this.toggleOpen}>open/close</button>
        <p>The door is {this.state.isLocked ? 'locked' : 'unlocked'}</p>
        <button className="lock-btn" onClick={this.toggleLock}>lock/unlock</button>
        <div className="alert-btn" onClick={this.messageUser}>
          <button>Click me!</button>
        </div>
      </div>
    );
  }
}

export default DoorDisplay;
