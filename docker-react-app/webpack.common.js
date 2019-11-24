 const path = require('path');
 const { CleanWebpackPlugin } = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const webpack = require('webpack');

 module.exports = {
   entry: {
     app: './src/index.js',
   },
   plugins: [
     // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
     new webpack.NamedModulesPlugin(),
     new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({
       title: 'Production',
       template: './public/index.html'
     }),
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
   module: {
           rules: [
               {
                    test: /\.(js|jsx)$/,
                   exclude: /node_modules/,
                   loader: 'babel-loader',
               },
               {
                    test: /\.css$/,
                       //   exclude: /node_modules/,
                          loaders: ['style-loader', 'css-loader', 'sass-loader'],
               }
           ],
       },
         resolve: {
           extensions: ['*', '.js', '.jsx']
         }
 };
