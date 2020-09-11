const factorial = require('.');

test('0! to equal 1', () => {
  expect(factorial(0n)).toBe(1n);
});

test('1! to equal 1', () => {
  expect(factorial(1n)).toBe(1n);
});

test('2! to equal 2', () => {
  expect(factorial(2n)).toBe(2n);
});

test('3! to equal 6', () => {
  expect(factorial(3n)).toBe(6n);
});

test('10! to equal 3628800', () => {
  expect(factorial(10n)).toBe(3628800n);
});

test('37! to equal 13763753091226345046315979581580902400000000', () => {
  expect(factorial(37n)).toBe(13763753091226345046315979581580902400000000n);
});

test('throw a TypeError if argument not a bigint', () => {
  expect(() => {
    factorial('foobar');
  }).toThrow(TypeError);
});
