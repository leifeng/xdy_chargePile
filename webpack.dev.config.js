var path = require('path');
var webpack = require('webpack');
module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'chargepile.js',
    publicPath: '/dist/'
  },
  externals: {
    'echarts': 'echarts'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.css$/,
      loaders: ["style", "css"]
    }, {
      test: /\.less$/,
      loaders: ["style", "css", "less"]
    }]
  }
};