# @bemoje/argv

Returns array of node-js commandline arguments

#### Version

<span><a href="https://npmjs.org/@bemoje/argv" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/argv" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/argv" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-argv.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/argv" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-argv.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/argv" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/argv" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-argv/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-argv" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/argv
npm install --save @bemoje/argv
npm install --save-dev @bemoje/argv
```

## Usage

```javascript
import argv from '@bemoje/argv'

/**
 * ON THE COMMAND LINE, ASSUMING THE EXAMPLE FILE IS CALLED WITH ARGUMENTS "a" AND "b"
 */
argv()
//=> ['a', 'b']

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
### argv

##### Returns
array of node-js commandline arguments

##### Returns
**[array][2]&lt;[string][3]>** 

[1]: #argv

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String