// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component  
  appOptions.i18n.setLocaleMessage('de', require('./locales/DE.json'))
  appOptions.i18n.setLocaleMessage('en', require('./locales/EN.json'))
  appOptions.i18n.setLocaleMessage('fr', require('./locales/FR.json'))
  Vue.component('Layout', DefaultLayout)
}
