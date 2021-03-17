import { sum, multiply, square } from '../math';

describe('sum', () => {
  it('should sum up all parameters and return the result', () => {
    expect(sum(1, 2, 5, 6)).toBe(14);
  });
});

describe('multiply', () => {
  it('should multiply all parameters and return the result', () => {
    expect(multiply(1, 2, 5, 6)).toBe(60);
  });
});

describe('square', () => {
  it('should square passed number', () => {
    expect(square(5)).toBe(25);
  });
});
