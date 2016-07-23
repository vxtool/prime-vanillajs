'use strict';

var webpack   = require('webpack');
var validate  = require('webpack-validator');
var config    = require('./webpack.config.js');

config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    mangle: {
      except: []
    }
  })
]);

config.devtool = 'eval';

module.exports = validate(config);
