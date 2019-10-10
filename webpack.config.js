const path = require("path");

module.exports = {
  entry: {
    index: "./_src/scripts/index.js",
    comments: "./_src/scripts/comments.js",
    search: "./_src/scripts/search.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            envName: "modern"
          }
        }
      }
    ]
  },
  output: {
    filename: "[name].min.js",
    path: path.resolve(__dirname, "assets/scripts/")
  },
  mode: 'production',
  optimization: {
    minimize: true
  }
};
