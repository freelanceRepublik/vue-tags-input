// TODO Existing eslint settings in package.json (keep only one)
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
    // TODO Configure this rules instead of ignoring them
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off',
  },
};
