// @ts-check
/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
	tabWidth: 2,
	printWidth: 120,
	useTabs: true,
	semi: false,
	singleQuote: true,
	quoteProps: 'consistent',
	trailingComma: 'none',
	bracketSpacing: true,
	bracketSameLine: false,
	arrowParens: 'always',
	parser: 'typescript',
	proseWrap: 'always',
	singleAttributePerLine: true,
	plugins: ['@ianvs/prettier-plugin-sort-imports'],
	importOrder: ['^react$', '^react-native$', '^expo-router$']
}

/*
plugins: ['@ianvs/prettier-plugin-sort-imports'],
importOrder: ['^react/(.*)$', '^react-native/(.*)$', '', '^expo/(.*)$', '', '^[.]']
*/
