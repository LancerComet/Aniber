/*
 *  selenium-driver-conf By LancerComet at 1:20, 2016/7/17.
 *  # Carry Your World #
 *  ---
 *  Selenium version configuration.
 *  Selenium will read all of these and verify itself to make sure everything is installed.
 */

const process = require('process')

module.exports = {
  // Check latest version here | 请在下方链接查询最新版本:
  // https://selenium-release.storage.googleapis.com/index.html
  selenium: {
    version: '2.53.1',
    baseURL: 'https://selenium-release.storage.googleapis.com'
  },
  driver: {
    chrome: {
      // Check latest version here |请在下方链接查询最新版本:
      // https://chromedriver.storage.googleapis.com/index.html
      version: '2.22',
      arch: process.arch,
      baseURL: 'https://chromedriver.storage.googleapis.com'
    },
    ie: {
      // Check latest version here |请在下方链接查询最新版本:
      // https://selenium-release.storage.googleapis.com/index.html
      version: '2.53.1',
      arch: process.arch,
      baseURL: 'https://selenium-release.storage.googleapis.com'
    }
  }
}
