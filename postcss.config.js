const autoprefixer = require("autoprefixer");
const csswring = require("csswring");
const purgeCss = require("postcss-purgecss");

module.exports = {
  plugins: [autoprefixer, purgeCss, csswring]
};
