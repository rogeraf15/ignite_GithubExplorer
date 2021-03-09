const path = require('path')

module.exports = {
  //onde esta o arquivo principal
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
  },
  resolve: {
      //quais arquivais vai ultilizar
      extensions: ['.js', '.jsx'],
  },
  module: {
      rules: [
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          //integração do babel com webpack
          use: 'babel-loader'
        }
      ]
  }
};