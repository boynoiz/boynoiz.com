let tailwindcss = require('tailwindcss')
module.exports = {
  parser: require('postcss-scss'),
  plugins: [
    tailwindcss('./tailwind-config.js'),
    require('postcss-import')(),
    require('precss')(),
    require('postcss-cssnext')({
      features: {
        // Mix takes care of this.
        autoprefixer: false,
      },
      browsers: [
        'last 2 versions',
        '> 5% in BE'
      ]
    }),
    require('cssnano')({
      preset: ['advanced', {
        discardEmpty: true,
        discardDuplicates: true,
        colormin: true,
        discardComments: {removeAll: true},
        filterPlugins: false
      }]
    }),
    require('postcss-reporter')({
      clearReportedMessages: true
    }),
  ]
}