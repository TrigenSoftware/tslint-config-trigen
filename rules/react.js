/**
 * ReactJS config
 */

module.exports = {
	'plugins': [
		'react'
	],
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		}
	},
	'rules': {
	    // React
	    // TODO 'react/forbid-prop-types', 'react/prop-types', 'react/require-optimization'
		'react/no-danger-with-children': 'error',
		'react/no-deprecated':           'error',
		'react/no-is-mounted':           'error',
		'react/no-render-return-value':  'error',
		'react/no-string-refs':          'error',
		'react/prefer-es6-class':        'error',
		'react/react-in-jsx-scope':      'error',
		'react/require-render-return':   'error',
		'react/self-closing-comp':       'error',
		'react/sort-comp':              ['error', {
			order: [
				'static-methods',
				'type-annotations',
				'lifecycle-before-render',
				'render',
				'lifecycle-after-render',
				'everything-else'
			],
			groups: {
				'lifecycle-before-render': [
					'displayName',
					'propTypes',
					'defaultProps',
					'contextTypes',
					'childContextTypes',
					'state',
					'/.+/',
					'constructor'
				],
				'lifecycle-after-render': [
					'getChildContext',
					'componentWillMount',
					'componentDidMount',
					'componentWillReceiveProps',
					'shouldComponentUpdate',
					'componentWillUpdate',
					'componentDidUpdate',
					'componentWillUnmount'
				]
			}
		}],
		'react/style-prop-object':            'error',
		'react/jsx-boolean-value':           ['error', 'never'],
		'react/jsx-closing-bracket-location': 'warn',
		'react/jsx-curly-spacing':           ['error', 'never'],
		'react/jsx-first-prop-new-line':     ['error', 'multiline'],
		// 'react/jsx-indent':                  ['error', 'tab'],
		'react/jsx-indent-props':            ['error', 'tab'],
		'react/jsx-key':                      'error',
		'react/jsx-max-props-per-line':      ['error', { 'maximum': 3 }],
		// 'react/jsx-no-bind':                 ['error', {
		// 	'ignoreRefs': true,
		// 	'allowBind':  true
		// }],
		'react/jsx-no-comment-textnodes':     'error',
		'react/jsx-no-duplicate-props':       'error',
		'react/jsx-no-undef':                 'error',
		'react/jsx-pascal-case':              'error',
		'react/jsx-space-before-closing':    ['error', 'never'],
		'react/jsx-uses-react':               'error',
		'react/jsx-uses-vars':                'error',
		'react/jsx-wrap-multilines':          'error'
	}
};
