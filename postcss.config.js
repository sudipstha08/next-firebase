// apps/debug-twcss/postcss.config.js
const { join } = require('path')

module.exports = {
  plugins: {
    tailwindcss: {
      config: join(__dirname, 'tailwind.config.js'),
    },
    autoprefixer: {},
  },
}
