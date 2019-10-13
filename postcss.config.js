module.exports = ctx => {
  return {
    plugins: [
      require('autoprefixer'),
      ...(ctx.webpack.mode === 'production' ? [require('postcss-purgecss')] : []),
      require('csswring')
    ]
  };
};
