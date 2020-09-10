#!/usr/bin/env node

const meow = require('meow');
const bigintFactorial = require('.');

const cli = meow(`
    Usage
      $ bigint-factorial <input>

    Examples
      $ bigint-factorial 7
      5040
`);

// eslint-disable-next-line no-console
console.log(bigintFactorial(BigInt(cli.input[0])).toString());
