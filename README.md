# bigint-factorial

![npm](https://img.shields.io/npm/v/bigint-factorial)
![David](https://img.shields.io/david/polarstoat/bigint-factorial)
![GitHub](https://img.shields.io/github/license/polarstoat/bigint-factorial)

> Tiny factorial function using JavaScript's built-in [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

## Usage

1. Install via [npm](https://www.npmjs.com/package/bigint-factorial)

   ```sh
   npm install bigint-factorial
   ```
2. Import the package

   ```js
   const factorial = require('bigint-factorial');
3. Calculate factorials

   ```js
   factorial(5) // 120n
   factorial(6) // 720n
   factorial(7) // 5040n
   factorial(183) // 1211079010624906224171770242040000913194755344907123328387229208384122199143398983962077168073033852647945203036376445283346314711222230177466494273255728793463071956674839497876987299889729720327479783667584731115257659422804284707863129430806869565563037239578516564219715854442393339376435200000000000000000000000000000000000000000000n
   ```

### API reference

<a name="module_bigint-factorial"></a>

#### bigint-factorial ⇒ <code>bigint</code>
Calculate the factorial of n

**Returns**: <code>bigint</code> - The factorial of the passed number  
**Throws**:

- <code>TypeError</code> If n is not of type 'bigint'


| Param | Type | Description |
| --- | --- | --- |
| n | <code>bigint</code> | The number to calculate the factorial of |



### System requirements

- [Node.js](https://nodejs.org/en/) `v10.22.0`
- [npm](https://www.npmjs.com) `v6.14.6`

This project has been tested and confirmed to work on the above versions.

`BigInt` was [added to Node.js in `v10.4.0`](https://nodejs.org/en/blog/release/v10.4.0/) with [V8 release `v6.7`](https://v8.dev/blog/v8-release-67), therefore this project won't work in Node.js versions earlier than `v10.4.0`.
