/**
 * Combine all configs without ReactJS config
 */

module.exports = {
	'extends': ['tslint:recommended'].concat([
		'./rules/common',
		'./rules/es6',
		'./rules/node',
		'./rules/ts'
	].map(require.resolve)),
	'rules': {}
};
