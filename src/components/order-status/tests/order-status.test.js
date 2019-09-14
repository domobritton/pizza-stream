import React from 'react';
import renderer from 'react-test-renderer';
import OrderStatus from '../';

describe('OrderStatus', () => {
  test('snapshot-1', () => {
    expect(
      renderer
        .create(<OrderStatus timer={60} />)
    ).toMatchSnapshot();
  });
  test('snapshot-2', () => {
    expect(
      renderer
        .create(<OrderStatus timer={0} />)
    ).toMatchSnapshot();
  });
});
