import calculate from '../logic/calculate';

describe('calculate', () => {
  test('AC button should reset the calculator data', () => {
    const result = calculate({ total: 10, next: '5', operation: '+' }, 'AC');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('Numeric input should update the calculator data', () => {
    const result = calculate({ total: null, next: '5', operation: '+' }, '3');
    expect(result).toEqual({
      total: null,
      next: '53',
      operation: '+',
    });
  });

  test('Decimal input should update the calculator', () => {
    const initialState = { total: null, next: '5', operation: '+' };
    const result = calculate(initialState, '.');
    expect(result).toEqual({
      total: null,
      next: '5.',
      operation: '+',
    });
  });

  test('Evaluate operations', () => {
    let element = {
      total: '30',
      next: '5',
      operation: '+',
    };

    let button = '+/-';
    expect(calculate(element, button)).toEqual({
      total: '30',
      next: '-5',
      operation: '+',
    });

    element = {
      total: '30',
      next: '5',
      operation: '÷',
    };

    button = '=';
    expect(calculate(element, button)).toEqual({
      total: '6',
      next: null,
      operation: null,
    });
  });
});
