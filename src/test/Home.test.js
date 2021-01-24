import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

it('renders correctly the Home Page', () => {
  const tree = renderer.create(<Home />).toJSON();

  expect(tree).toMatchSnapshot();
});
