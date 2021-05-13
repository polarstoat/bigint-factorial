/**
 * Calculate the factorial of n
 *
 * @param  {bigint} n The number to calculate the factorial of
 * @throws {TypeError} If n is not of type 'bigint'
 * @throws {RangeError} If n is negative
 * @return {bigint} The factorial of n
 * @module factorial
 */
function factorial(n) {
  if (typeof n !== 'bigint') throw new TypeError(`Expected parameter type of 'bigint' for n; instead got '${typeof n}'`);

  if (n < 0n) throw new RangeError('Cannot compute the factorial of a negative integer');

  if (n === 0n) return 1n;

  return n * factorial(n - 1n);
}

module.exports = factorial;
