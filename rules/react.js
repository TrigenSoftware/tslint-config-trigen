/**
 * ReactJS config
 */

const convert = require('./convert');

module.exports = {
	'extends': [
		'tslint-react'
	],
	'rules': convert({
		'jsx-alignment':       'error',
		'jsx-boolean-value':  ['error', 'never'],
		'jsx-curly-spacing':  ['error', 'never'],
		'jsx-equals-spacing': ['error', 'never'],
		'jsx-key':             'error',
		'jsx-no-bind':         'error',
		'jsx-no-lambda':       'error',
		'jsx-no-string-ref':   'error',
		'jsx-self-close':      'error',
		'jsx-wrap-multiline':  'error',
		'jsx-no-multiline-js': 'off'
	})
};
