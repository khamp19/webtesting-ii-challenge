import React, { Component } from 'react';
import Display from './Display';

class Dashboard extends Component {
  constructor(){
    super();
    this.state = {
      strikes: 0,
      balls: 0,
      fouls: 0,
      hits: 0,
      outs: 0,
    }
  }

  render(){
    return(
      <div>
        <h2>hello from Dashboard</h2>
        <Display {...this.state}/>
        <div>
          <button className='strike'>Strike</button>
          <button className='ball'>Ball</button>
          <button className='foul'>Foul</button>
          <button className='hit'>Hit</button>
        </div>
      </div>
    )
  }
}

export default Dashboard;