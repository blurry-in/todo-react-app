const Path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const SRC_DIR = Path.resolve(__dirname, 'src');
const DIST_DIR = Path.resolve(__dirname, 'dist');

const config = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/, /\.js$/],
        use: ['babel-loader'],
        exclude: [/node_modules/],
      },
      {
        test: /\.(css|scss)$/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          }],
          fallback: 'style-loader',
        })),
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: 'file-loader?name=[name]-[hash].[ext]&outputPath=assets/fonts/&publicPath=../',
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: 'file-loader?name=[name]-[hash].[ext]&outputPath=assets/images/&publicPath=../',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${SRC_DIR}/index.html`,
      filename: `${DIST_DIR}/index.html`,
    }),
    new Webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('styles/style.css'),
  ],
  devServer: {
    hot: true,
    open: true,
    inline: true,
    contentBase: '/',
  },
};

module.exports = config;
