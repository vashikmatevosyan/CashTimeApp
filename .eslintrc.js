module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-use-before-define': ['error', { variables: false }],
    'react/jsx-props-no-spreading': 'off',
    'import/no-cycle': 'off',
    'linebreak-style': 0,
    'jsx-a11y/label-has-associated-control': ['error', {
      required: {
        some: ['nesting', 'id'],
      },
    }],
    'jsx-a11y/label-has-for': ['error', {
      required: {
        some: ['nesting', 'id'],
      },
    }],
    'no-param-reassign': ['error', { props: false }],
    'import/prefer-default-export': 0,
    'react/prop-types': 'off',
    camelcase: 'off',
    'no-nested-ternary': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/no-unstable-nested-components': 'off',
  },
};
