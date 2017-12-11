const webpack = require('webpack')
const path = require('path')

const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'client.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.jsx', '.json', '.js']
  },
  devtool: 'inline-source-map'
})
