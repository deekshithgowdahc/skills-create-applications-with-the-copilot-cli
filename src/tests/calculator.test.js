const { add, sub, mul, div } = require('../lib/calculator');

describe('Calculator basic operations', () => {
  test('addition: 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtraction: 10 - 4 = 6', () => {
    expect(sub(10, 4)).toBe(6);
  });

  test('multiplication: 45 * 2 = 90', () => {
    expect(mul(45, 2)).toBe(90);
  });

  test('division: 20 / 5 = 4', () => {
    expect(div(20, 5)).toBe(4);
  });

  test('floating point division: 5 / 2 = 2.5', () => {
    expect(div(5, 2)).toBeCloseTo(2.5);
  });

  test('negative numbers: -3 + 7 = 4', () => {
    expect(add(-3, 7)).toBe(4);
  });

  test('large numbers multiplication', () => {
    expect(mul(1e6, 3)).toBe(3e6);
  });

  test('division by zero throws', () => {
    expect(() => div(1, 0)).toThrow('Division by zero');
  });
});
