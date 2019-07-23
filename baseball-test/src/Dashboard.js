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

  incStrikes = () => {
    let strikesUp = this.state.strikes;
    if (strikesUp === 2){
      this.incOuts();
      this.setState({ strikes: 0 });
    } else {
      console.log('strike!');
      strikesUp++;
      this.setState({ strikes: strikesUp })
    }
  }

  incFouls = () => {
    console.log('foul ball!');
    let fouls = this.state.fouls;
    let strikes = this.state.strikes;
    if(fouls >= 2){
      console.log('no strike');
      fouls++;
      this.setState({ fouls: fouls });
    } else {
      fouls++;
      strikes++;
      this.setState({
        fouls: fouls,
        strikes: strikes,
      })
    }
  }

  incBalls = () => {
    let balls = this.state.balls;
    if(balls === 3){
      console.log('walk');
      this.incHits();
      this.setState({
        balls: 0,
        strikes: 0,
        fouls: 0,
      })
    } else {
      console.log('bad pitch');
      balls++;
      this.setState({ balls: balls });
    }
  }

  incHits = () => {
    console.log('home run!');
    let hits = this.state.hits;
    hits++;
    this.setState({
      strikes: 0,
      balls: 0,
      fouls: 0,
      hits: hits,
    })
  }

  incOuts = () => {
    console.log(`you're out!`);
    let outs = this.state.outs;
    if(outs === 2){
      alert('end of inning');
      this.setState({
        strikes: 0,
        balls: 0,
        fouls: 0,
        hits: 0,
        outs: 0,
      })
    } else {
      outs++;
      this.setState({
        strikes: 0,
        balls: 0,
        fouls: 0,
        outs: outs,
      })
    }
  }

  clear = () => {
    console.log('clear board');
    this.setState({
      strikes: 0,
      balls: 0,
      fouls: 0,
      hits: 0,
      outs: 0,
    })
  }

  render(){
    return(
      <div>
        <h2>hello from Dashboard</h2>
        <Display {...this.state}/>
        <div>
          <button className='strike' onClick={this.incStrikes}>Strike</button>
          <button className='ball' onClick={this.incBalls}>Ball</button>
          <button className='foul' onClick={this.incFouls}>Foul</button>
          <button className='hit' onClick={this.incHits}>Hit</button>
        </div>
        <button onClick={this.clear}>Clear</button>
      </div>
    )
  }
}

export default Dashboard;