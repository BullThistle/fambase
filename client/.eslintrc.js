module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6
  },
  rules: {
    'react/jsx-filename-extension': 0,
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'linebreak-style': 0,
    'global-require': 0,
    'eslint linebreak-style': [0, 'error', 'windows'],
    'react/require-default-props': [0, { forbidDefaultForRequired: 0 }],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to']
      }
    ]
  },
  env: {
    browser: true,
    es6: true
  }
};
