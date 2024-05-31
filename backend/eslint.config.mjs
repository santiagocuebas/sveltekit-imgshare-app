import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';

export default [
	{ languageOptions: { globals: globals.node } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	{ plugins: { '@stylistic': stylistic } },
	{
		rules: {
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/quotes': ['error', 'single'],
			'@stylistic/semi': ['error', 'always'],
			'@stylistic/no-extra-semi': 'error',
			'@stylistic/brace-style': ['error', '1tbs'],
			'@stylistic/operator-linebreak': ['error', 'after', { 'overrides': { '?': 'before', ':': 'before' } }],
			'@stylistic/comma-dangle': ['error', 'never']
		}
	}
];
