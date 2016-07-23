'use strict';

var webpack   = require('webpack');
var validate  = require('webpack-validator');
var config    = require('./webpack.config.js');

config.devtool = 'eval-source-map';

config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
]);

module.exports = validate(config);
