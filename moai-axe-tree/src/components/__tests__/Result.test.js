import React from 'react';
import { render, fireEvent, getByTestId, prettyDOM } from '@testing-library/react';
import Result from '../Result';

test('shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
  
  const { container } = render(<Result status={fakeState.status} />);
  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});

test('messing with fake functions', () => {
  const fakeFn = jest.fn();

  fakeFn('hello');

  expect(fakeFn).toHaveBeenCalled();
  expect(fakeFn).toHaveBeenCalledTimes(1);
  expect(fakeFn).toHaveBeenCalledWith('hello');
  
  const fakeFn2 = jest.fn((val) => val + 2);
  
  const result = fakeFn2(2);
  expect(fakeFn2).toHaveBeenCalled();
  expect(fakeFn2).toHaveBeenCalledWith(2);

  expect(result).toBe(4);
});

test('can display results from an API call', () => {
  const {container, getByTestId, findByText, debug} = render(<Result status="Waiting" />);

  // console.log(prettyDOM(container));
  debug();

  const highScoreButton = getByTestId('high-scores');

  fireEvent.click(highScoreButton);

  return findByText('Bob', { exact: false });
});
