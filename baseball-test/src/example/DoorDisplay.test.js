import React from 'react';
import DoorDisplay from './DoorDisplay.js';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<DoorDisplay />)
  const instance = wrapper.instance();

  expect(instance.state.isOpen).toBe(false)

})

it('it should start with the door closed', () => {
  const wrapper = shallow(<DoorDisplay isOpen={false} />)
  expect(wrapper).toMatchSnapshot()
})

test.todo('should start with the door locked')

it('it should show the right words for open/unlocked', () => {
  const wrapper = shallow(<DoorDisplay isOpen={true} isLocked={false} />);
  expect(wrapper).toMatchSnapshot()
})

it('it should show the right words for open/locked', () => {
  const wrapper = shallow(<DoorDisplay isOpen={true} isLocked={true} />);
  expect(wrapper).toMatchSnapshot()
})

it('it should show the right words for closed/unlocked', () => {
  const wrapper = shallow(<DoorDisplay isOpen={false} isLocked={false} />);
  expect(wrapper).toMatchSnapshot()
})

it('it should show the right words for closed/locked', () => {
  const wrapper = shallow(<DoorDisplay isOpen={false} isLocked={true} />);
  expect(wrapper).toMatchSnapshot()
})

//button test 1
it('should change isOpen state on button click', () => {
  const wrapper = shallow(<DoorDisplay />)
  const instance = wrapper.instance();
  const button = wrapper.find('button').first(); 

  expect(instance.state.isOpen).toBe(false);
  button.simulate('click')
  expect(instance.state.isOpen).toBe(true);
  button.simulate('click')
  expect(instance.state.isOpen).toBe(false);
})

//button test 2
it('should change isLocked state on button click', ()=> {
  const wrapper = shallow(<DoorDisplay />)
  const instance = wrapper.instance();
  const button = wrapper.find('button.lock-btn')

  expect(instance.state.isLocked).toBe(true);
  button.simulate('click');
  expect(instance.state.isLocked).toBe(false);
  button.simulate('click');
  expect(instance.state.isLocked).toBe(true);
})

//button test 3
it('should alert the user when the message button is clicked', () => {
  let alertCalled = false;
  window.alert = jest.fn(() => {
    alertCalled = true
  })

  const wrapper = shallow(<DoorDisplay />)
  const button = wrapper.find('.alert-btn');
  button.simulate('click')

  expect(alertCalled).toBe(true);
})