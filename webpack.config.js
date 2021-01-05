const path = require('path')
const webpack = require('webpack')
const copyWebpack = require('copy-webpack-plugin')
const htmlWebpack = require('html-webpack-plugin')
const src = 'node_modules/cesium/Source'
const workers = '../Build/Cesium/Workers'
const cesiumLib = require('cesium')
const target = 'cesium-' + cesiumLib.VERSION

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'main.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      shared: path.resolve(__dirname, '../shared'),
    },
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
        use: ['url-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new htmlWebpack({
      template: 'src/index.html',
    }),
    new copyWebpack({
      patterns: [
        {
          from: path.join(src, workers),
          to: path.join(target, 'Workers'),
        },
      ],
    }),
    new copyWebpack({
      patterns: [
        {
          from: path.join(src, 'Assets'),
          to: path.join(target, 'Assets'),
        },
      ],
    }),
    new copyWebpack({
      patterns: [
        {
          from: path.join(src, 'Widgets'),
          to: path.join(target, 'Widgets'),
        },
      ],
    }),
    new copyWebpack({
      patterns: [
        {
          from: path.join(src, 'ThirdParty'),
          to: path.join(target, 'ThirdParty'),
        },
      ],
    }),
    new webpack.DefinePlugin({
      CESIUM_BASE_URL: JSON.stringify(target),
    }),
  ],
}
