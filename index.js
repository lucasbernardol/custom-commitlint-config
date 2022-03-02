module.exports = {
  rules: {
    'type-empty': [2, 'never'],
    'type-case': [2, 'always', 'lower-case'],
    'type-enum': [
      2,
      'always',
      [
        'chore',
        'feat',
        'fix',
        'revert',
        'refactor',
        'style',
        'test',
        'ci',
        'docs',
      ],
    ],

    'subject-empty': [2, 'never'],
    'subject-case': [2, 'always', ['sentence-case', 'lower-case']],
    'subject-max-length': [2, 'always', 72],
    'subject-full-stop': [2, 'never', '.'],

    'scope-case': [2, 'always', 'lower-case'],

    'body-leading-blank': [2, 'always'],
    'body-max-line-length': [2, 'always', 80],

    'footer-leading-blank': [2, 'always'],
    'footer-max-line-length': [2, 'always', 80],
  },
};
