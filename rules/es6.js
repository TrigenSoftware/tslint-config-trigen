/**
 * ECMAScript 6 config
 */

module.exports = {
	'env': {
		'es6': true
	},
	'parserOptions': {
		'ecmaVersion': 6,
		'sourceType': 'module',
		'ecmaFeatures': {
			'objectLiteralDuplicateProperties': false
		}
	},
	'rules': {
		'arrow-body-style':             ['error', 'as-needed'],
		'arrow-parens':                 ['error', 'as-needed', { 'requireForBlockBody': true }],
		'arrow-spacing':                 'error',
		'generator-star-spacing':       ['error', { 'before': true, 'after': false }],
		'no-confusing-arrow':           ['error', { 'allowParens': true}],
		'no-duplicate-imports':          'error',
		'no-useless-computed-key':       'error',
		'no-useless-constructor':        'error',
		'no-useless-rename':             'error',
		'no-var':                        'error',
		'object-shorthand':             ['error', 'always', { 'avoidQuotes': true }],
		'prefer-arrow-callback':        ['error', { 'allowNamedFunctions': true }],
		'prefer-const':                 ['error', {
	        'destructuring':          'all',
	        'ignoreReadBeforeAssign': false
	    }],
	    'prefer-reflect':                'error',
	    'prefer-rest-params':            'error',
	    'prefer-spread':                 'error',
	    'prefer-template':               'error',
	    'rest-spread-spacing':          ['error', 'never'],
	    'template-curly-spacing':        'error',
	    'yield-star-spacing':           ['error', 'before'],
		'space-before-function-paren':  ['error', {
			'anonymous':  'always',
			'named':      'never',
			'asyncArrow': 'always'
		}],
	}
};
