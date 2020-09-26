function factorialFor(n) {
  if (typeof n !== 'bigint') throw new TypeError(`Expected parameter type of 'bigint' for n; instead got '${typeof n}'`);

  if (n === 0n) return 1n;

  let result = n;

  for (let i = result - 1n; i >= 1n; i -= 1n) {
    result *= i;
  }

  return result;
}

module.exports = factorialFor;
