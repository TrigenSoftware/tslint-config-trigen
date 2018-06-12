/**
 * Combine all configs without ReactJS config
 */

module.exports = {
	'extends': ['tslint:recommended'].concat([
		'./rules/common',
		'./rules/es6',
		'./rules/node'
	].map(require.resolve)),
	'rules': {}
};
