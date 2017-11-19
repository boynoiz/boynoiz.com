let tailwindcss = require('tailwindcss')
module.exports = {
  plugins: [
    tailwindcss('./tailwind-config.js'),
    require('stylelint')({
      configFile: '.stylelintrc',
    }),
    require('css-mqpacker')({
      sort: true
    }),
    require('postcss-cssnext')({
      browsers: [
        'last 2 versions',
        '> 5% in BE'
      ]
    }),
    require('postcss-easy-import')(),
    require('postcss-reporter')({
      clearReportedMessages: true
    }),
    require('postcss-nested')(),
    require('postcss-remove-root')(),
    require('postcss-css-variables')(),
    require('postcss-conditionals')(),
    require('postcss-custom-media')(),
    require('cssnano')({
      preset: ['advanced', {
        discardEmpty: true,
        discardDuplicates: true,
        colormin: true,
        discardComments: {removeAll: true},
        filterPlugins: false
      }]
    }),
  ]
}