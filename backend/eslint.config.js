import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] },
  {
    files: ['src/**/*.ts'],
    extends: [
      tseslint.configs.recommended,
      {
        languageOptions: {
          parserOptions: {
            project: true,
            tsconfigRootDir: import.meta.dirname,
          },
        },
        rules: {
          '@typescript-eslint/no-explicit-any': 'warn',
          '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
          //'@typescript-eslint/explicit-function-return-type': 'off',
          '@typescript-eslint/no-misused-promises': 'error',
          '@typescript-eslint/consistent-type-imports': 'error',
          'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
        },
      },
    ],
  },
  // Enable the rule to report unused ESLint directives, recommended by J. Goldberg
  { linterOptions: { reportUnusedDisableDirectives: 'error' } },
)
