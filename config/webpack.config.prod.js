const webpack = require("webpack");
const config = require("./webpack.config.js");

config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("production"),
    },
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    mangle: {
      except: [],
    },
  }),
]);

config.devtool = "eval";

module.exports = config;
