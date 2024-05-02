const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('should return the sum of two numbers', () => {
    expect(calculateNumber('SUM', 1.0, 2.0)).to.equal(3);
  });

  it('should return the difference of two numbers', () => {
    expect(calculateNumber('SUBTRACT', 2.4, 1.0)).to.equal(1);
  });

  it('should return the quotient of two numbers', () => {
    expect(calculateNumber('DIVIDE', 6.0, 2.0)).to.equal(3);
  });

  it('should handle division by zero', () => {
    expect(calculateNumber('DIVIDE', 1.0, 0)).to.equal('Error');
  });
});