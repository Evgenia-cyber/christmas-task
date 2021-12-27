module.exports = {
  entry: './src/index.tsx', // стартовая точка, где хранится код приложения
  output: {
    assetModuleFilename: 'assets/[name][ext]',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
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
        test: /\.(sa|sc|c)ss$/i,
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
              resources: ['src/styles/vars.scss', 'src/styles/mixins.scss'],
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
};
