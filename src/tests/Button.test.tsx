import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../components/Button';
import { matchers } from '@emotion/jest';

test('Button displays label and handles click', () => {
  const handleClick = jest.fn();
  const { getByText } = render(
    <Button type="button" onClick={handleClick}>
      Click me
    </Button>
  );
  const button = getByText('Click me');
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

expect.extend(matchers);

test('Button accept sx props', () => {
  const container = render(
    <Button data-testid="btn-test-sx" sx={{ color: 'red' }}>
      Click me
    </Button>
  );
  const button = container.getByTestId('btn-test-sx');
  expect(button).toHaveStyleRule('color', 'red');
});
