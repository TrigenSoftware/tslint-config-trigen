/**
 * TypeScript config.
 */

const convert = require('./convert');

module.exports = {
	'rules': convert({
		'member-ordering':                 ['error', {
			'order': [
				'public-static-field',
				'public-static-method',
				'protected-static-field',
				'protected-static-method',
				'private-static-field',
				'private-static-method',
				'public-instance-field',
				'protected-instance-field',
				'private-instance-field',
				'public-constructor',
				'protected-constructor',
				'private-constructor',
				'instance-method'
			]
		}],
		'no-inferrable-types':              'error',
		'no-parameter-reassignment':        'error',
		'forin':                            'off',
		'no-duplicate-switch-case':         'error',
		'no-dynamic-delete':                'error',
		'no-inferred-empty-object-type':    'error',
		'no-object-literal-type-assertion': 'error',
		'no-return-await':                  'error',
		'no-this-assignment':              ['error', { 'allowed-names': ['^self$'], 'allow-destructuring': true }],
		'no-void-expression':               'error',
		'prefer-object-spread':             'error',
		'restrict-plus-operands':           'error',
		'no-mergeable-namespace':           'error',
		'no-require-imports':               'error',
		'object-literal-sort-keys':         'error',
		'prefer-readonly':                  'error',
		'align': {
			'options': [
				'parameters',
				'statements',
				'members',
				'elements'
			]
		},
		'array-type':                      ['error', 'array'],
		'binary-expression-operand-order':  'error',
		'encoding':                         'error',
		'match-default-export-name':        'error',
		'no-boolean-literal-compare':       'error',
		'no-unnecessary-callback-wrapper':  'error',
		'ordered-imports':                  'off',
		'prefer-function-over-method':      'error',
		'prefer-method-signature':          'error',
		'prefer-switch':                    'error',
		'prefer-while':                     'error',
		'return-undefined':                 'error',
		'switch-final-break':               'error'
	})
};
