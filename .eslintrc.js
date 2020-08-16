module.exports = {
	extends: ['@10up/eslint-config/node'],
	env: {
		commonjs: true,
		node: true,
		es6: true,
		mocha: true,
	},
	rules: {
		'func-names': 0,
	},
};
