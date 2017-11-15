const path = require('path')
const webpack = require('webpack')
const {mix} = require('laravel-mix')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// Start processes
mix
  .js('./resources/assets/js/app.js', 'public/assets/js')
  .copy('node_modules/trumbowyg/dist/ui/icons.svg', 'public/assets/img/icons.svg');

// Config

mix.webpackConfig({
  output: {
    publicPath: '/',
    chunkFilename: 'js/[name]-[chunkhash].js',
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '/assets/css/app.css',
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
    'popper.js/dist/umd/popper.js': ['Popper', 'window.Popper', 'default'],
    'exports-loader?Alert!bootstrap/js/dist/alert': ['Alert', 'window.Alert'],
    'exports-loader?Button!bootstrap/js/dist/button': ['Button', 'window.Button'],
    'exports-loader?Carousel!bootstrap/js/dist/carousel': ['Carousel', 'window.Carousel'],
    'exports-loader?Collapse!bootstrap/js/dist/collapse': ['Collapse', 'window.Collapse'],
    'exports-loader?Dropdown!bootstrap/js/dist/dropdown': ['Dropdown', 'window.Dropdown'],
    'exports-loader?Modal!bootstrap/js/dist/modal': ['Modal', 'window.Modal'],
    'exports-loader?Popover!bootstrap/js/dist/popover': ['Popover', 'window.Popover'],
    'exports-loader?Scrollspy!bootstrap/js/dist/scrollspy': ['Scrollspy', 'window.Scrollspy'],
    'exports-loader?Tab!bootstrap/js/dist/tab': ['Tab', 'window.Tab'],
    'exports-loader?Tooltip!bootstrap/js/dist/tooltip': ['Tooltip', 'window.Tooltip'],
    'exports-loader?Util!bootstrap/js/dist/util': ['Util', 'window.Util']
  })
  .extract([
    'babel-polyfill',
    'lodash',
    'jquery',
    'tether',
    'popper.js',
    'vue',
    'bootstrap',
    'bootstrap-vue',
    'socket.io-client'
  ])
  .options({
    processCssUrls: false,
    includePaths: []
  })
if (mix.inProduction()) {
  mix.version()
}
