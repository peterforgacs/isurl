#!/usr/bin/env node
'use strict';
const meow = require('meow');
const isurlCli = require('.');

const cli = meow(`
	Usage
	  $ isurl [input]

	Examples
	  $ isurl 'not an url'
	  false
	  $ isurl 'https://www.npmjs.com/package/isurl'
	  true
`);

console.log(isurlCli(cli.input[0]));
