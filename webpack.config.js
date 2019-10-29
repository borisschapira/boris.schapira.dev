const path = require('path');

module.exports = {
  entry: {
    index: './_src/scripts/index.js',
    comments: './_src/scripts/comments.js',
    search: './_src/scripts/search.js',
    critical: './_src/styles/scss/critical.scss',
    main: './_src/styles/scss/main.scss'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            envName: 'modern'
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'styles/[name].css'
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  output: {
    filename: "scripts/[name].min.js",
    path: path.resolve(__dirname, 'assets/')
  },
  mode: 'production',
  optimization: {
    minimize: true
  },
  devtool: 'source-map'
};

