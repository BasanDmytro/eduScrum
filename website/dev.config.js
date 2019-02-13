const path = require('path');
const merge = require('webpack-merge');
const base = require('./base.config');

const port = 3000;
const rootPath = __dirname;

module.exports = merge(base, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port,
    contentBase: path.join(rootPath, 'dist'),
    publicPath: '/',
    compress: true,
    historyApiFallback: true,
    stats: 'normal', // verbose, normal, minimal errors-only, none
    hot: false
  }
});
