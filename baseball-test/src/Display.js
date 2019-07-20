import React, { Component } from 'react';

const Display = (props) => {
  return(
    <div>
      <h3>Hello from Display</h3>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <p>Strikes: {props.strikes}</p>
        <p>Balls: {props.balls}</p>
        <p>Fouls: {props.fouls}</p>
        <p>Hits: {props.hits}</p>
        <p>Outs: {props.outs}</p>
      </div>
    </div>
  )
}

export default Display;