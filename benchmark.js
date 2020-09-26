// eslint-disable-next-line import/no-extraneous-dependencies
const benny = require('benny');

const factorialRecursion = require('.');
const factorialFor = require('./factorialFor.js');
const factorialWhile = require('./factorialWhile.js');

function createTestArray() {
  return Array.from({ length: 100 }, (_, i) => BigInt(i));
}

benny.suite(
  'Calculate factorials of 1...100',
  benny.add('Recursive function', () => {
    const testArray = createTestArray();

    return () => testArray.forEach((n) => factorialRecursion(n));
  }),
  benny.add('While loop', () => {
    const testArray = createTestArray();

    return () => testArray.forEach((n) => factorialWhile(n));
  }),
  benny.add('For loop', () => {
    const testArray = createTestArray();

    return () => testArray.forEach((n) => factorialFor(n));
  }),
  benny.cycle(),
  benny.complete(),
);

const factorialOf = 171n;

benny.suite(
  `Calculate factorial of ${factorialOf}`,
  benny.add('Recursive function', () => {
    factorialRecursion(factorialOf);
  }),
  benny.add('While loop', () => {
    factorialWhile(factorialOf);
  }),
  benny.add('For loop', () => {
    factorialFor(factorialOf);
  }),
  benny.cycle(),
  benny.complete(),
);
