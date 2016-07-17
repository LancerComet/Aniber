/*
 *  selenium-driver-conf By LancerComet at 1:20, 2016/7/17.
 *  # Carry Your World #
 *  ---
 *  Selenium Driver 配置文件.
 */

const process = require('process')

module.exports = {
  // 请在下方链接查询最新版本:
  // https://selenium-release.storage.googleapis.com/index.html
  selenium: {
    version: '2.53.1',
    baseURL: 'https://selenium-release.storage.googleapis.com'
  },
  driver: {
    chrome: {
      // 请在下方链接查询最新版本:
      // https://chromedriver.storage.googleapis.com/index.html
      version: '2.22',
      arch: process.arch,
      baseURL: 'https://chromedriver.storage.googleapis.com'
    }
  }
}
