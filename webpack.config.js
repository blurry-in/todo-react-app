const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_DIR = Path.resolve(__dirname, 'src');
const DIST_DIR = Path.resolve(__dirname, 'dist');

const config = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${SRC_DIR}/index.html`,
      filename: `${DIST_DIR}/index.html`,
    }),
  ],
};

module.exports = config;
