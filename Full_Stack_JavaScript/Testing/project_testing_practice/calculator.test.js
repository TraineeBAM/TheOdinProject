const calculator = require('./calculator');

test('Adding positive numbers: 5 + 10 = 15', () => {
    expect(calculator.add(5, 10)).toBe(15);
  });
  
  test('Subtracting positive numbers: 100 - 25 = 75', () => {
    expect(calculator.subtract(100, 25)).toBe(75);
  });
  
  test('Dividing positive numbers: 50 / 5 = 10', () => {
    expect(calculator.divide(50, 5)).toBe(10);
  });
  
  test('Multiplying positive numbers: 3 * 12 = 36', () => {
    expect(calculator.multiply(3, 12)).toBe(36);
  });
  
  test('Adding negative numbers: -5 + (-10) = -15', () => {
    expect(calculator.add(-5, -10)).toBe(-15);
  });
  
  test('Dividing by zero should return Infinity: 10 / 0', () => {
    expect(calculator.divide(10, 0)).toBe(Infinity);
  });
  
  test('Dividing zero by a number should return 0: 0 / 5', () => {
    expect(calculator.divide(0, 5)).toBe(0);
  });
  
  test('Multiplying decimal numbers: 2.5 * 1.5 = 3.75', () => {
    expect(calculator.multiply(2.5, 1.5)).toBe(3.75);
  });

  test('Adding large numbers: 9999999999999999 + 1 = 10000000000000000', () => {
    expect(calculator.add(9999999999999999, 1)).toBe(10000000000000000);
  });
  