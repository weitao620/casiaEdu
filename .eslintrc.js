module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    "quotes": 0,
    'eqeqeq': ["off"],
    'semi': 0,
    "no-unused-vars":"off",
    "no-irregular-whitespace":"off",
    singleQute:0,
    "space-before-function-paren": 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "space-before-function-paren": 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
