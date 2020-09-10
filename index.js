/**
 * Calculate the factorial of `n`
 *
 * @param  {BigInt} n The number to calculate the factorial of
 * @throws {TypeError} If n is not of type 'bigint'
 * @module bigint-factorial
 * @return {BigInt}   The factorial of the passed number
 */
function factorial(n) {
  if (typeof n !== 'bigint') throw new TypeError(`Expected parameter type of 'bigint' for n; instead got '${typeof n}'`);

  if (n === 0n) return 1n;

  return n * factorial(n - 1n);
}

module.exports = factorial;
