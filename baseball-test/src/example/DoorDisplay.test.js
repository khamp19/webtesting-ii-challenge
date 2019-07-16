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

//button not working
it('should change isOpen state on button click', () => {
  const wrapper = shallow(<DoorDisplay />)
  const instance = wrapper.instance();
  const button = wrapper.find('.open-btn'); //not finding

  expect(instance.state.isOpen).toBe(false);

  button.simulate('click')

  expect(instance.state.isOpen).toBe(true);

  button.simulate('click')

  expect(instance.state.isOpen).toBe(false);

})

test.todo('should change isLocked state on button click')

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