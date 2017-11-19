const {mix} = require('laravel-mix')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack');
const tailwindcss = require('tailwindcss');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
mix.config.postCss = require('./postcss.config').plugins;


// Start processes
mix
  .js('./resources/assets/js/app.js', 'public/assets/js')
  .copy('node_modules/trumbowyg/dist/ui/icons.svg', 'public/assets/img/icons.svg')
  .postCss('./resources/assets/sass/app.scss', 'public/assets/css');



// Config
mix.webpackConfig({
  output: {
    publicPath: '/',
    chunkFilename: 'js/[name]-[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: mix.inProduction() ? false : 'inline',
                ident: 'postcss',
                syntax: 'postcss-scss',
                config: {
                  path: './postcss.config.js'
                }
              },
            },
            {
              loader: 'sass-loader',
            },
          ]
        })
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      },
    ]
  },
  plugins: [
    new Dotenv(),
    new ExtractTextPlugin({
      filename: '/assets/css/app2.css',
      allChunks: true,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'assets/js/vendor',
      minChunks: function (module) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'assets/js/manifest',
      minChunks: Infinity
    }),
  ],
  resolve: {
    alias: {
      '~': path.join(__dirname, './node_modules')
    }
  },
  node: {
    fs: "empty"
  },
  devtool: 'source-map'
})
  .autoload({
    _babelPolyfill: ['babel-polyfill'],
    lodash: ['_', 'window._'],
    jquery: ['$', 'jQuery', 'jquery', 'window.jQuery'],
    vue: ['Vue', 'window.Vue'],
    axios: ['axios', 'window.axios'],
    tether: ['tether', 'Tether'],
    'socket.io-client': ['io', 'window.io'],
  })
  .extract([
    'babel-polyfill',
    'lodash',
    'jquery',
    'tether',
    'popper.js',
    'vue',
    'socket.io-client'
  ])
  .options({
    processCssUrls: false,
    includePaths: []
  })
if (mix.inProduction()) {
  mix.version()
}
