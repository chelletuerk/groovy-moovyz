const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: '#source-map',
  context: __dirname,
   entry: {
     main: ['./public/index.js'],
   },
   output: {
     path: __dirname + "/public/",
     filename: 'bundle.js',
     publicPath: '/public'
   },
   module: {
     loaders: [{
       test: /.jsx?$/,
       exclude: /(node_modules|bower_components)/,
       loader: 'babel-loader',
       query: {
         presets: ['es2015', 'react']
       }
     }]
   },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.css']
  },
};
