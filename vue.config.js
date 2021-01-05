const path = require('path')

const webpack = require('webpack')
const CopywebpackPlugin = require('copy-webpack-plugin')

// The path to the Cesium source code
const cesiumSource = 'node_modules/cesium/Source'
const cesiumWorkers = '../Build/Cesium/Workers'

const cesiumPackage = require('cesium')
const cesiumTarget = 'cesium-' + cesiumPackage.VERSION

module.exports = {
  // publicPath: '/',
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:3000',
  //     },
  //   },
  //   contentBase: './public',
  // },
  configureWebpack: {
    plugins: [
      // Copy Cesium Assets, Widgets, and Workers to a static directory
      new CopywebpackPlugin({
        patterns: [
          {
            from: path.join(cesiumSource, cesiumWorkers),
            to: path.join(cesiumTarget, 'Workers'),
          },
        ],
      }),
      new CopywebpackPlugin({
        patterns: [
          {
            from: path.join(cesiumSource, 'Assets'),
            to: path.join(cesiumTarget, 'Assets'),
          },
        ],
      }),
      new CopywebpackPlugin({
        patterns: [
          {
            from: path.join(cesiumSource, 'Widgets'),
            to: path.join(cesiumTarget, 'Widgets'),
          },
        ],
      }),
      new CopywebpackPlugin({
        patterns: [
          {
            from: path.join(cesiumSource, 'ThirdParty'),
            to: path.join(cesiumTarget, 'ThirdParty'),
          },
        ],
      }),
      new webpack.DefinePlugin({
        // Define relative base path in cesium for loading assets
        CESIUM_BASE_URL: JSON.stringify(cesiumTarget),
      }),
      // Copy tileset viewer wasm file to a static directory
      // new CopywebpackPlugin({
      //   patterns: [
      //     {
      //       from: 'node_modules/@aeroscan-nl/tileset-viewer/tileset_viewer_bg.wasm',
      //       to: 'tileset-viewer',
      //     },
      //   ],
      // }),
    ],
    // output: {
    //   filename: process.env.production === 'production' ? '[name].[chunkhash].js' : '[name].[hash].js',
    //   path: path.resolve(__dirname, 'dist'),

    //   // Needed to compile multiline strings in Cesium
    //   sourcePrefix: '',
    // },
    // amd: {
    //   // Enable webpack-friendly use of require in Cesium
    //   toUrlUndefined: true,
    // },
    // node: {
    //   // Resolve node module use of fs
    //   fs: 'empty',
    // },
    // resolve: {
    //   alias: {
    //     // Cesium module name
    //     shared: path.resolve(__dirname, 'shared'),
    //     'vendor/activestorage': path.resolve(__dirname, 'vendor/activestorage'),
    //   },
    // },
  },
}
