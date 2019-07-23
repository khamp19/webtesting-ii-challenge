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

it('should show the right number for strikes', () => {
  const wrapper = shallow(<Display strikes={2} />)
  expect(wrapper).toMatchSnapshot();
});

it('should show the right number for balls', () => {
  const wrapper = shallow(<Display balls={2} />)
  expect(wrapper).toMatchSnapshot();
});

it('should show the right number for fouls', () => {
  const wrapper = shallow(<Display fouls={2} />)
  expect(wrapper).toMatchSnapshot();
});

it('should show the right number for outs', () => {
  const wrapper = shallow(<Display outs={2} />)
  expect(wrapper).toMatchSnapshot();
});

it('should show the right number for hits', () => {
  const wrapper = shallow(<Display hits={5} />)
  expect(wrapper).toMatchSnapshot();
});

// it('should alert end of inning at 3 outs', () => {
//   let alertCalled = false;
//   window.alert = jest.fn(() => {
//     alertCalled = true
//   })

//   const wrapper = shallow(<Display outs={3} />)
//   const button = wrapper.find('.alert');
//   button.simulate('click');
//   expect(alertCalled).toBe(true);
// });