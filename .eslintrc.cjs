module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'import'],
  rules: {
    'no-var': 'warn',
    'no-multiple-empty-lines': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    eqeqeq: 'warn',
    'dot-notation': 'warn',
    'no-unused-vars': 'warn',
    'react/destructuring-assignment': 'warn',
    'react/jsx-pascal-case': 'warn',
    'react/no-direct-mutation-state': 'warn',
    'react/jsx-no-useless-fragment': 'warn',
    'react/no-unused-state': 'warn',
    'react/jsx-key': 'warn',
    'react/self-closing-comp': 'warn',
    'react/jsx-curly-brace-presence': 'warn',
    'react-hooks/exhaustive-deps': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        'import/order': [
          'warn',
          {
            groups: [
              ['builtin', 'external', 'internal'],
              ['parent', 'sibling', 'index'],
              'unknown',
            ],
            alphabetize: { order: 'asc', caseInsensitive: true },
          },
        ],
      },
    },
  ],
};
