import React from 'react';
import { render } from '@testing-library/react';
import CalculatorDisplay from '../../pages/CalculatorDisplay';

test('CalculatorDisplay component matches snapshot', () => {
  const { container } = render(<CalculatorDisplay />);
  expect(container).toMatchSnapshot();
});
