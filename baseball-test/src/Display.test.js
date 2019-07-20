import React from 'react';
import ReactDOM from 'react-dom';
import Display from './Display';
import { shallow } from 'enzyme';

//before all console.log('display props', props)

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Display />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should receive props', () => {
  const wrapper = shallow(<Display />)
  expect(wrapper).toMatchSnapshot()
});

it('should start with props of 0', () => {
  const wrapper = shallow(<Display strikes={0} balls={0} hits={0} fouls={0} outs={0} />)
  expect(wrapper).toMatchSnapshot();
});

test.todo('should show the right number for strikes');

test.todo('should show the right number for balls');

test.todo('should show the right number for fouls');

test.todo('should show the right number for outs');

test.todo('should show the right number for hits');

test.todo('should alert end of inning at 3 strikes');