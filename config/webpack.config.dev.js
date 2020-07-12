const webpack = require("webpack");
const config = require("./webpack.config.js");

config.devtool = "eval-source-map";

config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
]);

module.exports = config;
