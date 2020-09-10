/**
 * Calculate the factorial of `n`
 *
 * @param  {BigInt} n The number to calculate the factorial of
 * @return {BigInt}   The factorial of the passed number
 */
function factorial(n) {
  if (n === 0n) return 1n;

  return n * factorial(n - 1n);
}

module.exports = factorial;
