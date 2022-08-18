module.exports = {
    use: 'gridsome-plugin-i18n',
    options: {
      locales: ['de', 'en', 'fr'],
      pathAliases: {
        de: 'de',
        en: 'en',
        fr: 'fr',
      },
      defaultLocale: 'de',
    },
  }