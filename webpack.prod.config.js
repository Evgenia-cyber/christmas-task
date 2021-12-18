const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies
const commonConfig = require('./webpack.common.config');

module.exports = {
  ...commonConfig,
  mode: 'production',
  output: {
    ...commonConfig.output,
    path: path.resolve(__dirname, '../build'),
    filename: 'main.js',
    publicPath: './',
    clean: true,
  },
  module: {
    ...commonConfig.module,
    rules: [...commonConfig.module.rules],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // местонахождение шаблона
      filename: './index.html', // куда положить build-версию
      minify: { collapseWhitespace: true },
      favicon: 'src/assets/images/favicon.ico',
    }),
  ],
  optimization: {
    minimize: true,
  },
};
