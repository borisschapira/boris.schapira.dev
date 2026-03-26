const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = (ctx) => {
  return {
    plugins: [
      require('autoprefixer'),
      require('./postcss-prefers-reduced-motion'),
      ...(ctx.mode === 'production'
        ? [
            purgecss({
              content: ['./_site/**/*.html'],
              css: ['./_src/styles/css/*.css'],
              safelist: {
                deep: [/save-data$/, /webshare$/, /:lang/],
              },
            }),
          ]
        : []),
      require('cssnano'),
    ],
  };
};
