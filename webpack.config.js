(function () {
  "use strict";

  var webpack = require('webpack'),
    path = require('path'),
    CleanWebpackPlugin = require('clean-webpack-plugin');


  var ROOT = path.resolve(__dirname);

  var APP = __dirname + '/app';

  var config = {
    context: APP,
   // devtool: "source-map",
    entry: {
      app: './scripts/ng-boot.js',
      vendor: [
        "angular",
        "angular-animate",
        "angular-aria",
        "angular-cookies",
        "angular-loader",
        "angular-material",
        "angular-messages",
        "angular-resource",
        "angular-route",
        "angular-sanitize",
        "angular-scenario",
        "angular-ui-router",
        "webcomponents.js"
      ]

    },
    output: {
      // output is set to root because the middleware will use that
      // non-dev builds must set the path (see grunt webpack: build-dist)
      // set the path to ".tmp" if you want to run directly currently
      path: "dist/", // if you see " Fatal error: invalid argument " then this is not set to root "/"
      publicPath: "/",
      filename: "[name].bundle.js"
      //https://webpack.github.io/docs/configuration.html#output-devtoolmodulefilenametemplate
      //devtoolModuleFilenameTemplate: "webpack:///[resource-path]" // maybe dropping the hash will help defualt: webpack:///[resource-path]?[hash]
    },
    resolve: {
      modulesDirectories: ['./node_modules']
    },
    module: {
      loaders: [
        {
          test: /\.json$/,
          loader: "json-loader"
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
          loader: "file-loader"
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: "svg-url-loader?limit=10000&mimetype=image/svg+xml"
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        },
        {
          test: /\.jpg$/,
          loader: "file-loader"
        },
        {
          test: /\.png$/,
          loader: "url-loader?mimetype=image/png"
        },
        {
          test: /\.css$/,
          loader: "style!css"
        },
        {
          test: /index\.html/,
          loader: "file-loader?name=[name].[ext]"
        }
      ],
      noParse: [
        /^angular(\-.*)?$/
      ]
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new webpack.PrefetchPlugin(ROOT, './node_modules/angular/angular'),
      new (require('ng-annotate-webpack-plugin'))({add: true}),
      new webpack.optimize.OccurrenceOrderPlugin(),
      // use for development time hot-swap of only modified modules that the webpack client will load up
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      //https://webpack.github.io/docs/list-of-plugins.html#sourcemapdevtoolplugin
      // Eval == FAST!!
      // new webpack.EvalSourceMapDevToolPlugin({
      //   //new webpack.SourceMapDevToolPlugin({
      //   filename: '[file].map',
      //   columns:  true,  // columns in SourceMaps? false is faster
      //   module:   true   // use SourceMaps from loaders?   false is faster
      //   // for dist build, this will need to be set? append: "\n//# sourceMappingURL=[url]"
      // })
      new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
      new (require('webpack-vendor-chunk-plugin'))('vendor')
    ],
    devServer: {
      contentBase: APP
    }
  };

  module.exports = config;
})();
