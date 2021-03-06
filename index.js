module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    project: ['./tsconfig.json'],
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    'shared-node-browser': true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: 'tsconfig.json',
      },
    },
  },
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    // https://www.npmjs.com/package/eslint-config-airbnb-typescript
    'airbnb-typescript/base',

    // https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',

    // https://www.npmjs.com/package/eslint-plugin-import
    'plugin:import/errors',
    'plugin:import/warnings',

    /**
     * Make sure to put prettier last, so it gets the chance to override other
     * configs.
     *
     * @see https://github.com/prettier/eslint-config-prettier
     */
    'prettier',
    'prettier/@typescript-eslint',
  ],
  rules: {
    // general ESLint rules
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'no-console': 'warn',

    // https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',

    // https://github.com/benmosher/eslint-plugin-import
    'import/extensions': ['error', 'never'],

    // personal ESLint rules
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    'import/prefer-default-export': 'off',
    'array-callback-return': 'off',
    'prefer-destructuring': 'off',
    'no-control-regex': 'off',
    'no-irregular-whitespace': 'off',
  },
}
