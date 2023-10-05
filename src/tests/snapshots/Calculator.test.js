import React from 'react';
import { render } from '@testing-library/react';
import CalculatorButton from '../../components/Calculator';

test('Render CalculatorButton with default props', () => {
  const { container } = render(<CalculatorButton />);
  expect(container).toMatchSnapshot();
});

test('Render CalculatorButton with custom props', () => {
  const { container } = render(
    <CalculatorButton
      value="1"
      className="specific-button"
      onClick={() => {}}
    />,
  );
  expect(container).toMatchSnapshot();
});
