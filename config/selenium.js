/**
 * Selenium version configuration.
 * Selenium will read all of these and verify itself to make sure everything is installed.
 */

const process = require('process')

module.exports = {
  // Check latest version here: https://selenium-release.storage.googleapis.com/index.html
  selenium: {
    version: '3.4.0',
    baseURL: 'https://selenium-release.storage.googleapis.com'
  },

  driver: {
    firefox: {
      version: '0.17.0',
      arch: process.arch,
      baseURL: 'https://github.com/mozilla/geckodriver/releases/download'
    },

    chrome: {
      // Check latest version here: https://chromedriver.storage.googleapis.com/index.html
      version: '2.30',
      arch: process.arch,
      baseURL: 'https://chromedriver.storage.googleapis.com'
    },

    ie: {
      // Check latest version here: https://selenium-release.storage.googleapis.com/index.html
      version: '3.4.0',
      arch: process.arch,
      baseURL: 'https://selenium-release.storage.googleapis.com'
    },

    edge: {
      version: '15063'
    }
  }
}
