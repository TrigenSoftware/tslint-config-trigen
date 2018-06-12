/**
 * Node.js config
 */

const convert = require('./convert');

module.exports = {
	'extends': [
		'tslint-eslint-rules'
	],
	'rules': convert({
		// 'callback-return':     'error',
		'handle-callback-err': 'error',
		// 'no-path-concat':      'error',
		// 'no-process-exit':     'warn',
		// 'no-sync':             'error'
	})
};
