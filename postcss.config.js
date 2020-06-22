const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = ctx => {
  return {
    plugins: [
      require('autoprefixer'),
      ...(ctx.webpack.mode === 'production'
        ? [
            purgecss({
              content: ['./_site/**/*.html'],
              css: ['./_src/styles/css/*.css'],
              whitelistPatternsChildren: [/save-data$/, /webshare$/, /turbolinks/ ]
            })
          ]
        : []),
      require('csswring')
    ]
  };
};
