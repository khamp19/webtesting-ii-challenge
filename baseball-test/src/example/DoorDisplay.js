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
        <div className="alert-btn" onClick={this.messageUser}>Click me!</div>
        <p>The door is {this.state.isOpen ? 'open' : 'closed'}</p>
        <div className="open-btn" onClick={this.toggleOpen}>
          <button onClick={this.toggleOpen}>open/close</button>
        </div>
        <p>The door is {this.state.isLocked ? 'locked' : 'unlocked'}</p>
        <button className="lock-btn" onClick={this.toggleLock}>lock/unlock</button>
      </div>
    );
  }
}

export default DoorDisplay;
