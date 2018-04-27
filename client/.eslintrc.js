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
    'eslint linebreak-style': [0, 'error', 'windows']
  },
  env: {
    browser: true,
    es6: true
  }
};
