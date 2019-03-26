const merge = require('webpack-merge');
const base = require('./base.config');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'source-map',
  watch: true,
  devServer: {
  historyApiFallback: true
}
});
