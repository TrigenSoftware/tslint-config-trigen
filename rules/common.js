/**
 * Common config
 */

module.exports = {
	'rules': {
		// Possible Errors
		'no-console':                   ['error', { allow: ['warn', 'error'] }],
		'valid-jsdoc':                   'error',

		// Best Practices
		'array-callback-return':         'error',
		'block-scoped-var':              'error',
		'complexity':                    'off',
		'consistent-return':             'error',
		'curly':                         'error',
		'default-case':                  'error',
		'dot-location':                 ['error', 'property'],
		'dot-notation':                  'error',
		'eqeqeq':                        'off',
		'no-caller':                     'error',
		'no-case-declarations':          'error',
		'no-eval':                       'error',
		'no-extra-label':                'error',
		'no-implicit-coercion':         ['error', { 'allow': ['~'] }],
		'no-implicit-globals':           'error',
		'no-implied-eval':               'error',
		'no-invalid-this':               'off',
		'no-iterator':                   'error',
		'no-lone-blocks':                'error',
		'no-loop-func':                  'error',
		'no-magic-numbers':              'error',
		'no-multi-spaces':              ['error', { exceptions: { 
			'ImportDeclaration':  true,
			'VariableDeclarator': true,
			'Property':           true
		}}],
		'no-multi-str':                  'error',
		'no-native-reassign':            'error',
		'no-new-func':                   'error',
		'no-new-wrappers':               'error',
		'no-new':                        'error',
		'no-octal-escape':               'error',
		'no-param-reassign':            ['error', { 'props': false }],
		'no-proto':                      'error',
		'no-return-assign':              'error',
		'no-script-url':                 'error',
		'no-self-compare':               'error',
		'no-sequences':                  'error',
		'no-throw-literal':              'error',
		'no-unused-expressions':         'error',
		'no-useless-call':               'error',
		'no-useless-concat':             'error',
		'no-useless-escape':             'error',
		'no-void':                       'warn',
		'no-with':                       'error',
		'radix':                         'error',
		'yoda':                         ['error', 'never', { 'exceptRange': true }],

		// Variables
		'init-declarations':            ['error', 'always'],
		'no-catch-shadow':               'error',
		'no-label-var':                  'error',
		'no-shadow-restricted-names':    'error',
		'no-undef-init':                 'error',
		'no-undefined':                  'error',
		'no-use-before-define':         ['error', { 
			'functions': false,
			'classes':   false
		}],

		// CommonJS
		'no-new-require':                'error',

		// Stylistic Issues
		'array-bracket-spacing':        ['error', 'never'],
		'block-spacing':                 'error',
		'brace-style':                  ['error', '1tbs'],
		'camelcase':                     'error',
		'comma-dangle':                 ['error', 'never'],
		'comma-spacing':                 'error',
		'comma-style':                   'error',
		'computed-property-spacing':     'error',
		'consistent-this':              ['error', 'self'],
		'eol-last':                      'error',
		'func-names':                    'error',
		'func-style':                   ['error', 'declaration', { 'allowArrowFunctions': true }],
		'indent':                       ['error', 'tab', { 'SwitchCase': 1 }],
		'jsx-quotes':                   ['error', 'prefer-double'],
		'key-spacing':                  ['error', { 'mode': 'minimum', 'align': 'value' }],
		'keyword-spacing':               'error',
		'linebreak-style':               'error',
		'max-len':                      ['error', { 
			'code':                   140, 
			'tabWidth':               4,
			'ignoreTrailingComments': true, 
			'ignoreUrls':             true,
			'ignoreStrings':          true,
			'ignoreTemplateLiterals': true,
			'ignoreRegExpLiterals':   true
		}],
		'max-nested-callbacks':         ['error', 4],
		'max-params':                   ['error', 6],
		'max-statements-per-line':       'error',
		'new-cap':                      ['error', { 'capIsNew': false }],
		'new-parens':                    'error',
		'newline-after-var':             'error',
		'newline-before-return':         'off',
		'newline-per-chained-call':      'off',
		'no-array-constructor':          'error',
		'no-lonely-if':                  'error',
		'no-multiple-empty-lines':      ['error', { 'max': 1 }],
		'no-new-object':                 'error',
		'no-spaced-func':                'error',
		'no-trailing-spaces':            'error',
		'no-unneeded-ternary':           'error',
		'no-whitespace-before-property': 'error',
		'object-curly-spacing':         ['error', 'always'],
		'one-var-declaration-per-line': ['error', 'initializations'],
		'one-var':                       'off',
		'operator-assignment':          ['error', 'always'],
		'operator-linebreak':           ['error', 'before', { 'overrides': { '=': 'after' }}],
		'quote-props':                  ['error', 'consistent'],
		'quotes':                       ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
		'require-jsdoc':                 'off',
		'semi-spacing':                  'error',
		'semi':                          'error',
		'space-before-blocks':           'error',
		'space-before-function-paren':  ['error', 'never'],
		'space-in-parens':               'error',
		'space-infix-ops':              ['error', {'int32Hint': true}],
		'space-unary-ops':               'error',
		'spaced-comment':                'error',
		'unicode-bom':                   'error'
	}
};
