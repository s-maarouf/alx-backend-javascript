const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return the sum of two numbers', () => {
    assert.strictEqual(calculateNumber('SUM', 1.0, 2.0), 3);
  });

  it('should return the difference of two numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 2.4, 1.0), 1);
  });

  it('should return the quotient of two numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 6.0, 2.0), 3);
  });

  it('should handle division by zero', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.0, 0), undefined);
  });
});
