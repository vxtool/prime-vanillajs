'use strict';

var path      = require('path');
var webpack   = require('webpack');
var validate  = require('webpack-validator');

var PATHS = {
  app: path.resolve(__dirname, '../source'),
  build: path.resolve(__dirname, '../dist')
};

module.exports = validate({
  entry: [
    path.resolve(PATHS.app, 'main.js')
  ],
  output: {
    path: PATHS.build,
    filename: 'js/scripts.min.js',
    publicPath: '/'
  },
  resolve: {
    root: path.join(__dirname, ''),
    modulesDirectories: [
      'node_modules'
    ],
    extensions: ['', '.js']
  },
  eslint: {
    configFile: '.eslintrc'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0']
        },
        include: PATHS.app
      }
    ],
    noParse: /\.min\.js/
  },
  plugins: [],
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
});
