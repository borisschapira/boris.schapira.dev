// Configuration Prettier pour le projet
module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  overrides: [
    {
      files: ['*.md'],
      options: {
        tabWidth: 4,
        proseWrap: 'never'
      }
    }
  ],
  trailingComma: 'es5',
  bracketSpacing: true,
  arrowParens: 'avoid'
};
