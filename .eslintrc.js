module.exports = {
	extends: ['expo', 'prettier', 'plugin:prettier/recommended'],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': 'error',
		'@typescript-eslint/strict-boolean-expressions': [
			2,
			{
				allowString: false,
				allowNumber: false
			}
		],
		'eqeqeq': 'error',
		'no-inline-comments': 'error',
		'semi': ['off', 'never'],
		'no-console': ['error', { allow: ['warn', 'error'] }],
		'comma-dangle': ['error', 'never']
	}
}
