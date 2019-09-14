import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../';

describe('Header', () => {
  test('snapshot', () => {
    expect(
      renderer
        .create(<Header />)
    ).toMatchSnapshot();
  });
});
