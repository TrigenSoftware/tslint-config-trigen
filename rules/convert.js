
module.exports = (rules) =>
	Object.keys(rules).reduce((convertedRules, ruleName) => {

		let rule = rules[ruleName];

		if (!Array.isArray(rule)) {
			rule = [rule];
		}

		const [severity, ...options] = rule;

		if (typeof severity !== 'string') {
			console.error(`Rule "${ruleName}" have invalid config signature.`);
		}

		convertedRules[ruleName] = {
			severity,
			options
		};

		if (/^ter-/.test(ruleName)) {
			convertedRules[ruleName.replace('ter-', '')] = false;
		}

		return convertedRules;
	}, {});
