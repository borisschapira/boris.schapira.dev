const autoprefixer = require('autoprefixer')
const csswring = require('csswring')

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-purgecss'),
    require('csswring')
  ]
}