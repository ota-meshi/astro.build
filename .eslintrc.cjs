module.exports = {
	parser: '@typescript-eslint/parser',
	extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
	plugins: ['@typescript-eslint', 'prettier'],
	rules: {
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/camelcase': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-this-alias': 'off',
		'no-console': 'warn',
		'prefer-const': 'warn',
		'no-shadow': 'off',
		'no-undef': 'warn',
		'@typescript-eslint/no-shadow': ['error'],
		// 'prettier/prettier': 'error',
	},
	overrides: [
		{
			files: ['*.astro'],
			// Enable plugin
			plugins: ["astro"],
			env: {
			  // Enables global variables available in Astro components.
			  node: true,
			  "astro/astro": true,
			},
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
		},
		{
		  // Define the configuration for `<script>` tag.
		  // Script in `<script>` is assigned a virtual file name with the `.js` extension.
		  files: ["**/*.astro/*.js", "*.astro/*.js"],
		  env: {
			browser: true,
		  },
		},
	],
}
