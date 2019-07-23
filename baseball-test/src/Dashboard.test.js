import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should start with state at 0', () => {
  const wrapper = shallow(<Dashboard strikes={0} balls={0} hits={0} fouls={0} outs={0} />)
  expect(wrapper).toMatchSnapshot();
});

it('should change the strike state', () => {
  const wrapper = shallow(<Dashboard />)
  const instance = wrapper.instance();
  const button = wrapper.find('button.strike'); 

  expect(instance.state.strikes).toBe(0);
  button.simulate('click')
  expect(instance.state.strikes).toBe(1);
  button.simulate('click')
  expect(instance.state.strikes).toBe(2);
});

it('should reset the strikes, balls, and fouls with 3 strikes', () => {
  const wrapper = shallow(<Dashboard />)
  const instance = wrapper.instance();
  const button = wrapper.find('button.strike');

  expect(instance.state.strikes).toBe(0);
  button.simulate('click');
  expect(instance.state.strikes).toBe(1);
  button.simulate('click');
  expect(instance.state.strikes).toBe(2);
  button.simulate('click');
  expect(instance.state.strikes).toBe(0);
  expect(instance.state.balls).toBe(0);
  expect(instance.state.fouls).toBe(0);
});

it('should increase the outs with 3 strikes', () => {
  const wrapper = shallow(<Dashboard />)
  const instance = wrapper.instance();
  const button = wrapper.find('button.strike');

  expect(instance.state.strikes).toBe(0);
  button.simulate('click');
  expect(instance.state.strikes).toBe(1);
  button.simulate('click');
  expect(instance.state.strikes).toBe(2);
  button.simulate('click');
  expect(instance.state.strikes).toBe(0);
  expect(instance.state.outs).toBe(1);
});

it('should change the ball state', () => {
  const wrapper = shallow(<Dashboard />)
  const instance = wrapper.instance();
  const button = wrapper.find('button.ball');

  expect(instance.state.balls).toBe(0);
  button.simulate('click')
  expect(instance.state.balls).toBe(1);
  button.simulate('click')
  expect(instance.state.balls).toBe(2);
});

it('should reset the fouls, strikes, and balls with 4 balls', () => {
  const wrapper = shallow(<Dashboard />)
  const instance = wrapper.instance();
  const button = wrapper.find('button.ball');

  expect(instance.state.balls).toBe(0);
  button.simulate('click')
  expect(instance.state.balls).toBe(1);
  button.simulate('click')
  expect(instance.state.balls).toBe(2);
  button.simulate('click');
  expect(instance.state.balls).toBe(3);
  button.simulate('click');
  expect(instance.state.balls).toBe(0);
  expect(instance.state.strikes).toBe(0);
  expect(instance.state.fouls).toBe(0);
});

it('should increase the hits with 4 balls', () => {
  const wrapper = shallow(<Dashboard />)
  const instance = wrapper.instance();
  const button = wrapper.find('button.ball');

  expect(instance.state.balls).toBe(0);
  button.simulate('click');
  expect(instance.state.balls).toBe(1);
  button.simulate('click');
  expect(instance.state.balls).toBe(2);
  button.simulate('click');
  expect(instance.state.balls).toBe(3);
  button.simulate('click');
  expect(instance.state.balls).toBe(0);
  expect(instance.state.hits).toBe(1);
});

it('should change the hit state', () => {
  const wrapper = shallow(<Dashboard />)
  const instance = wrapper.instance();
  const button = wrapper.find('button.hit');

  expect(instance.state.hits).toBe(0);
  button.simulate('click')
  expect(instance.state.hits).toBe(1);
  button.simulate('click')
  expect(instance.state.hits).toBe(2);
});

it('a hit should reset balls, fouls, and strikes', () => {
  const wrapper = shallow(<Dashboard />)
  const instance = wrapper.instance();
  const button = wrapper.find('button.hit');

  expect(instance.state.hits).toBe(0);
  button.simulate('click')
  expect(instance.state.hits).toBe(1);
  expect(instance.state.balls).toBe(0);
  expect(instance.state.strikes).toBe(0);
  expect(instance.state.fouls).toBe(0);
});

it('should change the foul state', () => {
  const wrapper = shallow(<Dashboard />)
  const instance = wrapper.instance();
  const button = wrapper.find('button.foul');

  expect(instance.state.fouls).toBe(0);
  button.simulate('click')
  expect(instance.state.fouls).toBe(1);
  button.simulate('click')
  expect(instance.state.fouls).toBe(2);
});

it('fouls should increase strikes up to 2', () => {
  const wrapper = shallow(<Dashboard />)
  const instance = wrapper.instance();
  const button = wrapper.find('button.foul');

  expect(instance.state.fouls).toBe(0);
  expect(instance.state.strikes).toBe(0)
  button.simulate('click')
  expect(instance.state.fouls).toBe(1);
  expect(instance.state.strikes).toBe(1)
  button.simulate('click')
  expect(instance.state.fouls).toBe(2);
  expect(instance.state.strikes).toBe(2);
});

it('fouls should not cause 3 strikes', () => {
  const wrapper = shallow(<Dashboard />)
  const instance = wrapper.instance();
  const button = wrapper.find('button.foul');

  expect(instance.state.fouls).toBe(0);
  expect(instance.state.strikes).toBe(0)
  button.simulate('click')
  expect(instance.state.fouls).toBe(1);
  expect(instance.state.strikes).toBe(1)
  button.simulate('click')
  expect(instance.state.fouls).toBe(2);
  expect(instance.state.strikes).toBe(2);
  button.simulate('click')
  expect(instance.state.fouls).toBe(3);
  expect(instance.state.strikes).toBe(2);
});

// const fouls = wrapper.find('button.foul');
// const balls = wrapper.find('button.ball');
// const hit = wrapper.find('button.hit');

// it('should reset the strikes, balls, fouls, and hits with 3 outs', () => {
//   const wrapper = shallow(<Dashboard strikes={2} />)
//   const instance = wrapper.instance();
//   const button = wrapper.find('button.strike');

//   expect(instance.state.strikes).toBe(0);
//   button.simulate('click');
//   expect(instance.state.strikes).toBe(1);
//   button.simulate('click');
//   expect(instance.state.strikes).toBe(2);
//   button.simulate('click');
//   expect(instance.state.strikes).toBe(0);
// });