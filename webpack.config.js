var webpack = require('webpack')

module.exports = {
  entry: './index.js',

  output: {
    path: 'public',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          'babel-loader?presets[]=es2015&presets[]=react'
        ],
        exclude: /node_modules/
      }
    ]
  }
}