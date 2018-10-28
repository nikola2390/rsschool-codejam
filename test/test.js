const assert = require('assert');
const sumOfOther = require('../sumOfOther.js');
const make = require('../make.js');


describe('sumOfOther', () => {
  it('empty array', () => {
    const sum = sumOfOther([]);
    assert.deepEqual(sum, []);
  });

  it('array with 1 element', () => {
    const sum = sumOfOther([4]);
    assert.deepEqual(sum, [0]);
  });

  it('array of positive numbers', () => {
    const sum = sumOfOther([1, 2, 3, 4]);
    assert.deepEqual(sum, [9, 8, 7, 6]);
  });

  it('array with negative numbers', () => {
    const sum = sumOfOther([10, -8, 5, -3, 12, -11, -1]);
    assert.deepEqual(sum, [-6, 12, -1, 7, -8, 15, 5]);
  });
});

describe('make', () => {
  const sum = (a, b) => a + b;
  it('positive numbers', () => {
    const answer = make(4)(9)(12)(sum);
    assert.deepEqual(answer, 25);
  });

  it('negative numbers', () => {
    const answer = make(-2)(-3)(-14)(-22)(sum);
    assert.deepEqual(answer, -41);
  });

  it('negative and positive numbers', () => {
    const answer = make(32)(-8)(11)(-25)(sum);
    assert.deepEqual(answer, 10);
  });

  it('with different numbers of arguments', () => {
    const answer = make(2, 3)(-8)(-11, 7)(5, 9, 14)(sum);
    assert.deepEqual(answer, 21);
  });
});
