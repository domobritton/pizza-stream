import React from 'react';
import renderer from 'react-test-renderer';
import Loader from '../';

describe('Loader', () => {
  test('snapshot-1', () => {
    expect(
      renderer
        .create(<Loader timer={60} />)
    ).toMatchSnapshot();
  });
  test('snapshot-2', () => {
    expect(
      renderer
        .create(<Loader timer={0} />)
    ).toMatchSnapshot();
  });
});
