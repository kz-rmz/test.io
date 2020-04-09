const path = require('path');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contentHash].js'
  },
  plugins: [new CleanWebpackPlugin()]
})
