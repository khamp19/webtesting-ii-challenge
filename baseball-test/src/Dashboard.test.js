import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import { shallow } from 'enzyme';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test.todo('should start with state at 0');

test.todo('should change the strike state');

test.todo('should change the ball state');

test.todo('should change the hit state');

test.todo('should change the foul state');

test.todo('should hide the foul button at 2 strikes');

test.todo('should reset the state with 3 strikes');

test.todo('should increase the outs with 3 strikes');

test.todo('should reset the state with 4 balls');

test.todo('should increase the outs with 4 balls');

test.todo('a hit should reset the state');

test.todo('fouls should increase strikes');

test.todo('fouls should not cause 3 strikes');

