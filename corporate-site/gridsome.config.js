// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const i18n = require('./src/plugins/i18n')
const remark = require('./src/plugins/remark')
module.exports = {
  siteName: 'Bricoflor Corporate Site',
  plugins: [i18n, remark]
}
