module.exports = {
  indexPath: 'oui.html',
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/ubus': {
        target: 'http://192.168.5.194'
      },
      '/cgi-bin/': {
        target: 'http://192.168.5.194'
      },
      '/views/': {
        target: 'http://192.168.5.194'
      },
      '/i18n/': {
        target: 'http://192.168.5.194'
      }
    }
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
