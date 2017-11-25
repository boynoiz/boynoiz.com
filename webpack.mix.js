const glob = require('glob-all')
const path = require('path')
const mix = require('laravel-mix')
const Dotenv = require('dotenv-webpack')
const purgeCss = require('purgecss-webpack-plugin')

mix.config.postCss = require('./postcss.config').plugins

// Start processes
mix
  .js('./resources/assets/js/frontend/app.js', 'public/assets/js')
  .js('./resources/assets/js/backend/backend.js', 'public/assets/js')
  .sass('./resources/assets/sass/frontend/app.scss', 'public/assets/css')
  .copy(['node_modules/font-awesome/fonts', 'node_modules/raleway-webfont/fonts', 'node_modules/themify-icons-sass/fonts'], 'public/assets/fonts')
  .options({
    processCssUrls: false,
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
  ]);

if (mix.inProduction()) {
  mix.version()
}

// Config
mix.webpackConfig({
  output: {
    publicPath: '/public/',
    chunkFilename: 'js/[name].js',
  },
  plugins: [
    new Dotenv(),
    new purgeCss({
      paths: glob.sync([
        path.join(__dirname, 'app/**/*.php'),
        path.join(__dirname, 'resources/views/**/*.blade.php'),
        path.join(__dirname, 'resources/assets/js/**/*.vue'),
        path.join(__dirname, 'node_modules/simplemde/**/*.js'),
        path.join(__dirname, 'node_modules/turbolinks/**/*.js'),
      ]),
      whitelistPatterns: [/carbon/, /language/, /hljs/],
      extractors: [
        {
          extractor: class {
            static extract (content) {
              return content.match(/[A-z0-9-:\/]+/g)
            }
          },
          extensions: ['html', 'js', 'php', 'vue'],
        }
      ]
    }),
  ],

  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.js',
      '~': path.join(__dirname, './node_modules')
    },
  },
  devtool: 'source-map'
})
