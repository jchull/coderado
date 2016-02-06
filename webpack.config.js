(function () {
  "use strict";

  var webpack = require('webpack'),
    path = require('path');
  const cleanPlugin = require('clean-webpack-plugin');
  const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

  var APP = __dirname + '/app';

  var config = {
    context: APP,
    devtool: "source-map",
    entry: {
      app: [ './scripts/ng-boot.js']
    },
    output: {
      path: APP + '/build',
      filename: "bundle.js"
    },
    resolve: {
      modulesDirectories: ['components', 'node_modules']
    },
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: "style!css"
        },
        {
          test: /\.eot(\?\S*)?$/,
          loader: 'url-loader?limit=100000&mimetype=application/vnd.ms-fontobject'
        },
        {
          test: /\.woff2(\?\S*)?$/,
          loader: 'url-loader?limit=100000&mimetype=application/font-woff2'
        },
        {
          test: /\.woff(\?\S*)?$/,
          loader: 'url-loader?limit=100000&mimetype=application/font-woff'
        },
        {
          test: /\.ttf(\?\S*)?$/,
          loader: 'url-loader?limit=100000&mimetype=application/font-ttf'
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: "file"
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000&mimetype=image/svg+xml"
        },
        {
          test: /\.html$/,
          loader: 'raw'
        }
      ]
    },
    plugins: [
      new cleanPlugin(['dist']),
      new ngAnnotatePlugin({
        add: true
      })
    ],
    devServer: {
      contentBase: APP
    }
  };

  module.exports = config;
})();
