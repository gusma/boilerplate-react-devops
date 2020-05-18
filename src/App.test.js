import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = <p>Hi Morty! I'm Pickle Rick!</p>;
  expect(wrapper.contains(welcome)).toBe(true);
});