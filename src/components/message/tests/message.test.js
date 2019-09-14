import React from 'react';
import renderer from 'react-test-renderer';
import Message from '../';

describe('Message', () => {
  test('snapshot', () => {
    expect(
      renderer
        .create(<Message />)
    ).toMatchSnapshot();
  });
});
