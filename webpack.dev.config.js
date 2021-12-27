const path = require('path');

// по дефолту webpack умеет обрабатывать js файлы. Для html, сss нужны плагины
const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies
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
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // местонахождение шаблона
      filename: './index.html', // куда положить build-версию
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, 'build'),
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
};
