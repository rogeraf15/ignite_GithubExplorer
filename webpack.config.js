const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

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
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
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