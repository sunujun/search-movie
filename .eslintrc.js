module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    semi: ['error', 'never'],
    'react-native/no-inline-styles': 0,
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
}
