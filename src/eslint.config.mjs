import eslintRecommended from 'eslint-config-eslint';

export default [
  {
    ...eslintRecommended,
    files: ['./static/**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {
      'no-console': 'warn',
      'no-warning-comments': 'warn',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
    },
  },
];
