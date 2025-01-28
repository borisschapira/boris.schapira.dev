const path = require('path');

var scriptsConfig = {
  entry: {
    index: './_src/scripts/index.js'
  },
  module: {
    rules: [
      {
        test: /scripts.*\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            envName: 'modern',
          },
        },
      },
    ],
  },
  output: {
    filename: 'scripts/[name].min.js',
    path: path.resolve(__dirname, 'assets/'),
  },
  mode: 'production',
  optimization: {
    minimize: true,
  },
  devtool: 'source-map',
};

var cssConfig = {
  entry: {
    critical: './_src/styles/scss/critical.scss',
    main: './_src/styles/scss/main.scss',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'styles/[name].css',
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'assets/'),
  },
  mode: 'production',
  optimization: {
    minimize: true,
  },
};

module.exports = [scriptsConfig, cssConfig];
