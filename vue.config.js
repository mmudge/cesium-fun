const path = require('path')
const webpack = require('webpack')
const copyWebpack = require('copy-webpack-plugin')
const src = 'node_modules/cesium/Source'
const workers = '../Build/Cesium/Workers'
const cesiumLib = require('cesium')
const target = 'cesium-' + cesiumLib.VERSION

module.exports = {
  publicPath: '/',
  configureWebpack: {
    plugins: [
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
  },
}
