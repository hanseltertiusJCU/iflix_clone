// https://github.com/michael-ciniawsky/postcss-load-config

const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project 
  content: ['./resources/assets/js/**/*.vue'],

  css: ['./resources/assets/css/app.css'],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
})

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "tailwindcss": "./tailwind.js",
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    "postcss-import": {},
    ...process.env.NODE_ENV === 'production' ? [purgecss] : []
  }
}
