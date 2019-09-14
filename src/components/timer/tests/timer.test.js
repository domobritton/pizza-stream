import React from 'react';
import renderer from 'react-test-renderer';
import Timer from '../';

describe('Timer', () => {
  test('snapshot-1', () => {
    expect(
      renderer
        .create(<Timer timer={60} />)
    ).toMatchSnapshot();
  });
  test('snapshot-2', () => {
    expect(
      renderer
        .create(<Timer timer={0} />)
    ).toMatchSnapshot();
  });
});