// по дефолту webpack умеет обрабатывать js файлы. Для html, сss нужны плагины
const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  entry: './src/index.tsx', // стартовая точка, где хранится код приложения
  output: {
    assetModuleFilename: 'assets/[name][ext]',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // create `style` nodes from JS strings
          'style-loader',
          // translate CSS into CommonJS
          'css-loader',
          // compiles Sass to CSS
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              // эти scss файлы будут общими для всех других scss
              resources: ['src/styles/vars.scss'],
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|mp3)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // местонахождение шаблона
      filename: './index.html', // куда положить build-версию
    }),
  ],
};
