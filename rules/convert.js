
module.exports =
function convert(rules) {
	return Object.keys(rules).reduce((convertedRules, ruleName) => {

		let rule = rules[ruleName];

		if (!Array.isArray(rule)) {
			rule = [rule];
		}

		const [severity, ...options] = rule;

		convertedRules[ruleName] = {
			severity,
			options
		};

		if (/^ter-/.test(ruleName)) {
			convertedRules[ruleName.replace('ter-', '')] = false;
		}

		return convertedRules;
	}, {});
};
