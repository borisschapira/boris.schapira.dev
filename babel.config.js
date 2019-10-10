module.exports = {
  env: {
    modern: {
      presets: [
        [
          "@babel/preset-env", {
            modules: false,
            targets: {
              // This will target browsers which support ES modules.
              esmodules: true
            }
          }
        ]
      ],
      plugins: [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-syntax-dynamic-import"
      ]
    }
  }
};
