/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Thumb from './Thumb';

const image1 =
  'https://randomuser.me/api/portraits/women/50.jpg';
const logo1 =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Rohde_%26_Schwarz_Logo.svg/800px-Rohde_%26_Schwarz_Logo.svg.png';

it('renders correctly as square', () => {
  const wrapper = mount(
    <Thumb height={60} image={image1} width={60} />,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly as landscape', () => {
  const wrapper = mount(
    <Thumb height={60} image={logo1} width={120} />,
  );

  expect(wrapper).toMatchSnapshot();
});
