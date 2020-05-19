module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
  },
  extends: ['prettier', 'prettier/standard', 'plugin:vue/recommended'],
  plugins: ['vue', 'prettier'],
  settings: {},
  rules: {
    'prettier/prettier': 'error',
    // rules that we disagree with
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off',
  },
};
