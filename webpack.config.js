const { resolve, join } = require('path');

const config = {
  entry: {
    main: resolve('./src/index.tsx'),
  },
  output: {
    path: resolve(__dirname, 'public'),
    // nome do arquivo que vai ser gerado
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: ['awesome-typescript-loader?module=es6'],
        exclude: [/node_modules/],
      },
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        enforce: 'pre',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
};

module.exports = config;
