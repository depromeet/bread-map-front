module.exports = {
  root: true,
  extends: ['@react-native-community'],
  plugins: ['unused-imports', 'import', 'prettier'],
  rules: {
    'no-console': 'error',
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        endOfLine: 'auto',
        printWidth: 120,
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
      },
    ],

    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 0,
    'import/prefer-default-export': 'off',

    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
        pathGroups: [
          {
            pattern: '@*/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: [],
        // 동일한 그룹에선 오름차순으로 정렬한다.
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
