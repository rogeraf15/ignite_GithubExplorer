const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  //onde esta o arquivo principal
  mode: 'development',
  //para sourceMap, para debugar melhor
  devtool: 'eval-source-map',
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
  },
  resolve: {
      //quais arquivais vai ultilizar
      extensions: ['.js', '.jsx'],
  },

  //para nao precisar ficar dando reload
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },

  //para ter o html estatico
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