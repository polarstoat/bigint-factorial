const factorial = require('.');

describe('BigInt is available', () => {
  test('as standard built-in object', () => {
    expect(typeof BigInt).toBe('function');
  });

  test('using constructor (e.g. BigInt(1) )', () => {
    expect(typeof BigInt(1)).toBe('bigint');
  });

  test('as integer literal (e.g. 1n)', () => {
    expect(typeof 1n).toBe('bigint');
  });
});

describe('Factorial calculation of', () => {
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
});

test('throw a TypeError if argument not a bigint', () => {
  expect(() => {
    factorial('foobar');
  }).toThrow(TypeError);
});
