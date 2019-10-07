const autoprefixer = require("autoprefixer");
const csswring = require("csswring");
const purgeCss = require("postcss-purgecss");

console.log(process.env.NODE_ENV);

module.exports = ctx => ({
  plugins: ctx.env === 'development' ?  [autoprefixer, csswring] : [autoprefixer, purgeCss, csswring]
})
