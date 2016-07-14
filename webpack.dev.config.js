"use strict";

var webpack = require('webpack'),
  path = require('path');

var ROOT = path.resolve(__dirname);

module.exports = {
  context: ROOT,
  entry: {
    app: './src/app/ng-boot.js',
    vendor: [
      'jquery',
      'underscore',
      'angular',
      'angular-animate',
      'angular-aria',
      'angular-chart.js',
      'angular-cookies',
      'angular-resource',
      'angular-route',
      'angular-loader',
      'angular-messages',
      'angular-ui-router',
      'angular-material',
      'angular-sanitize',
      'angular-loading-bar',
      'angular-vs-repeat',
      'js-data',
      'js-data-angular',
      'js-cookie',
      'dropzone',
      'hammerjs',
      'atmosphere.js',
      'moment',
      'moment-timezone',
      'underscore.string',
      'numbro'
      // '/src/app/vendor'
    ]

  },
  output: {
    // output is set to root because the middleware will use that
    // non-dev builds must set the path (see grunt webpack: build-dist)
    // set the path to ".tmp" if you want to run directly currently
    path: "/", // if you see " Fatal error: invalid argument " then this is not set to root "/"
    publicPath: "/",
    filename: "[name].bundle.js"
    //https://webpack.github.io/docs/configuration.html#output-devtoolmodulefilenametemplate
    //devtoolModuleFilenameTemplate: "webpack:///[resource-path]" // maybe dropping the hash will help defualt: webpack:///[resource-path]?[hash]
  },

  // http://webpack.github.io/analyse/
  profile: false,
  //   stats: {
  //     hash: true,
  //     version: true,
  //     timings: true,
  //     assets: true,
  //     chunks: true,
  //     modules: true,
  //     reasons: true,
  //     children: true,
  //     source: false,
  //     errors: true,
  //     errorDetails: true,
  //     warnings: true,
  //     publicPath: true
  //   },

  debug: true,
  // Configured in plugin below, do not use the concatenated-string options here!
  devtool: "sourcemap",

  resolve: {
    root: [
      path.resolve('./src')
    ],
    // the fewer directories, the faster module resolution is
    modulesDirectories: ['node_modules', './lib']
  },

  module: {
    loaders: [
      // css loader is pretty slow
      {test: /\.css$/, loader: "style!css"},
      {test: /AvsAn-simple\.min\.js$/, loader: "script"},
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {test: /jquery\.js$/, loader: 'expose?$!expose?jQuery'}
    ],
    noParse: [
      /^jquery(\-.*)?$/,
      /^angular(\-.*)?$/
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      "_": "underscore",
      "atmosphere": "atmosphere.js",
      "moment": "moment"
    }),
    // prefetch resources that slow everything else down
    new webpack.PrefetchPlugin(ROOT, './node_modules/jquery/dist/jquery'),
    new webpack.PrefetchPlugin(ROOT, './node_modules/angular/angular'),
    new webpack.PrefetchPlugin(ROOT, './node_modules/axios'),
    new webpack.PrefetchPlugin(ROOT, './node_modules/moment-timezone/data/packed/latest.json'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    // use for development time hot-swap of only modified modules that the webpack client will load up
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // Not using moment.js locales
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    // Not using Numbro's translations
    new webpack.IgnorePlugin(/^\.\/languages$/, /numbro$/),
    new (require('ng-annotate-webpack-plugin'))({add: true}),
    // separate dependencies from our code
    //https://webpack.github.io/docs/list-of-plugins.html#sourcemapdevtoolplugin
    // Eval == FAST!!
    new webpack.EvalSourceMapDevToolPlugin({
      //new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
      exclude: ['./src/app/vendor.js'], // do not create sourcemap for vendor code
      columns:  true,  // columns in SourceMaps? false is faster
      module:   true   // use SourceMaps from loaders?   false is faster
      // for dist build, this will need to be set? append: "\n//# sourceMappingURL=[url]"
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new (require('webpack-vendor-chunk-plugin'))('vendor')
  ]
};

// "#cheap-module-source-map": initial: 32, rebuild: 26, debug-served: refresh, debug-local: works
// "#cheap-source-map":        initial: 33, rebuild: 27, debug-served: refresh, debug-local: works
// "cheap-module-eval-source-map": initial: 8, rebuild: 3, debug-served: no break, debug-local: no-break
// "cheap-eval-source-map":        initial: 7, rebuild: 3, debug-served: no-break, debug-local: no-break
// "module-eval-source-map": initial: 9, rebuild: 3, debug-served: refresh, debug-local: url-param breaks mapping to local resource predictably
// "eval-source-map":        initial: 11, rebuild: 4, debug-served: refresh, debug-local: url-param breaks mapping to local resource predictably
//** RECOMMENDATION: use module-eval-source-map for development, don't add files to chrome workspace, debug with source served like: webpack:///./src/app/main/main.js?abc123:66
