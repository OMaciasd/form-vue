/** @type {import('eslint').Linter.Config} */
const config = {
 env: {
  browser: true,
  es2021: true,
  node: true,
 },
 extends: "eslint:recommended",
 parserOptions: {
  ecmaVersion: 12,
  sourceType: "module",
 },
 rules: {
  semi: ["error", "always"],
  quotes: ["error", "single"],
  'no-undef': 'off',
 },
};

module.exports = {
 extends: 'eslint:recommended',
 globals: {
  myGlobalVariable: 'readonly',
 },
 parserOptions: {
  ecmaVersion: 2021,
  sourceType: 'module',
 },
 rules: {
  'no-console': 'warn',
  'no-warning-comments': 'warn',
 },
};


