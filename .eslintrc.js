module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    indent: [
      'warn',
      2,
      {
        offsetTernaryExpressions: true,
        ignoredNodes: ['ConditionalExpression *'],
      },
    ],
    'linebreak-style': ['error', 'unix'],
    '@typescript-eslint/no-empty-function': 'off',
    quotes: ['warn', 'single'],
    semi: ['warn', 'always'],
  },
};
