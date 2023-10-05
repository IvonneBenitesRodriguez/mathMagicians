import operate from '../logic/operate';

describe('operate function', () => {
  it('should add two numbers', () => {
    const result = operate('2', '3', '+');
    expect(result).toBe('5');
  });

  it('should subtract two numbers', () => {
    const result = operate('5', '2', '-');
    expect(result).toBe('3');
  });

  it('should multiply two numbers', () => {
    const result = operate('4', '5', 'x');
    expect(result).toBe('20');
  });

  it('should divide two numbers', () => {
    const result = operate('6', '2', '÷');
    expect(result).toBe('3');
  });

  it('should handle division by zero', () => {
    const result = operate('1', '0', '÷');
    expect(result).toBe("Can't divide by 0.");
  });

  it('should find modulo of two numbers', () => {
    const result = operate('7', '3', '%');
    expect(result).toBe('1');
  });

  it('should handle modulo when dividing by zero', () => {
    const result = operate('5', '0', '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error for an unknown operation', () => {
    expect(() => operate('3', '4', '#')).toThrowError("Unknown operation '#'");
  });
});
