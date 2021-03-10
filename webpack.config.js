const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  //onde esta o arquivo principal
  mode: isDevelopment ? 'development' : 'production',
  //para sourceMap, para debugar melhor
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
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
    contentBase: path.resolve(__dirname, 'public'),
    hot: true
  },

  plugins: [
    //Para ter o Refresh sem alterar os valores
    isDevelopment && new ReactRefreshWebpackPlugin(),
    //para ter o html estatico
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
    //esse filter é para tirar os booleans, no caso se der false no isDevelopment
  ].filter(Boolean),
  module: {
      rules: [
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          //integração do babel com webpack
          use: {
            loader : 'babel-loader',
            options: {
              //Para ter o Refresh sem alterar os valores
              plugins : [
                isDevelopment && require.resolve('react-refresh/babel')
              ].filter(Boolean)
            }
          }  
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          //integração do babel com webpack
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        
      ]
  }
};