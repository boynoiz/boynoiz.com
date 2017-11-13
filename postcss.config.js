module.exports = {
  plugins: {
    'stylelint': {
      configFile: '.stylelintrc',
    },
    'css-mqpacker': {
      sort: true
    },
    'postcss-cssnext': {
      browsers: [
        'last 2 versions',
        '> 5% in BE'
      ]
    },
    'postcss-easy-import': {},
    'postcss-reporter': {
      clearReportedMessages: true
    },
    'postcss-nested': {},
    'postcss-remove-root': {},
    'postcss-css-variables': {},
    'postcss-conditionals': {},
    'postcss-custom-media': {},
    'cssnano': {
      preset: ['advanced', {
        discardEmpty: true,
        discardDuplicates: true,
        colormin: true,
        discardComments: {removeAll: true},
        filterPlugins: false
      }]
    },
  }
}
