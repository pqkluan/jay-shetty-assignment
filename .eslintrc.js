module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'prettier/prettier': 0,
  },
  overrides: [{
    files: ['*.ts', '*.tsx'],
    rules: {
      'curly': ['error', 'multi-or-nest', 'consistent'],
    },
  }],
};
