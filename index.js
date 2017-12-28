'use strict';
const isURL = require('is-url');

module.exports = input => {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}
	return isURL(input);
};
