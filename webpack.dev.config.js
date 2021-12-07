const path = require('path');
const commonConfig = require('./webpack.common.config');

module.exports = {
  ...commonConfig,
  mode: 'development',
  output: {
    ...commonConfig.output,
    publicPath: '/',
  },
  module: {
    ...commonConfig.module,
    rules: [...commonConfig.module.rules],
  },
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, 'build'),
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
};
