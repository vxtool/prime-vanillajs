var path = require('path');
var webpack = require('webpack');

var NODE_ENV = process.env.NODE_ENV;

var env = {
  production: NODE_ENV === 'production',
  staging: NODE_ENV === 'staging',
  test: NODE_ENV === 'test',
  development: NODE_ENV === 'development' || typeof NODE_ENV === 'undefined'
};

var PATHS = {
  app: path.resolve(__dirname, '../source'),
  build: path.resolve(__dirname, '../dist')
};

module.exports = {
  env : NODE_ENV,
  entry: {
    app: path.resolve(PATHS.app, 'main.js')
  },
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
  module: {
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
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
    __DEV__: env.development,
    __STAGING__: env.staging,
    __PRODUCTION__: env.production,
    __CURRENT_ENV__: '\'' + (NODE_ENV) + '\''
  })],
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
