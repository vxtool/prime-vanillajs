var webpack   = require('webpack');
var validate  = require('webpack-validator');
var config    = require('./webpack.config.js');

config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development'),
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
  }),
  new webpack.optimize.OccurenceOrderPlugin()
]);

config.devServer: {
  contentBase: path.resolve(__dirname, PATHS.build),
  port: 8000,
  historyApiFallback: true
}

config.devtool: 'source-map';

module.exports = validate(config);
