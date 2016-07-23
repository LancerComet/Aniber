/*
 *  Nightwatch Configuration By LancerComet at 0:51, 2016/7/17.
 *  # Carry Your World #
 *  ---
 *  Nightwatch Configuration file.
 *  Loading settings in "./build" and attach them to Nightwatch.
 *  You can check [this](http://nightwatchjs.org/guide#settings-file) to find all configuration about Nightwatch.
 */
const process = require('process')
const path = require('path')
const seleniumConfig = require('./build/selenium-conf')
const phantomjs = require('phantomjs-prebuilt')

module.exports = (function (settings) {
  // Setup the browser we use.
  // We will use phantomjs by default.
  var browser = process.argv[2] ? process.argv[2].replace(/-/g, '') : 'phantomjs'
  if (browser === 'ie') browser = 'internet explorer'

  // Tell Nightwatch where is the Selenium. | 设置 Selenium 所在位置。
  settings.selenium.server_path = `${path.resolve()}/node_modules/selenium-standalone/.selenium/selenium-server/${seleniumConfig.selenium.version}-server.jar`

  // Attach Chrome web driver. | 加载 Chrome Driver.
  settings.selenium.cli_args['webdriver.chrome.driver'] = `${path.resolve()}/node_modules/selenium-standalone/.selenium/chromedriver/${seleniumConfig.driver.chrome.version}-${seleniumConfig.driver.chrome.arch}-chromedriver`

  // Attach IE web driver. | 加载 IE Driver.
  settings.selenium.cli_args['webdriver.ie.driver'] = `${path.resolve()}/node_modules/selenium-standalone/.selenium/iedriver/${seleniumConfig.driver.ie.version}-${seleniumConfig.driver.ie.arch}-IEDriverServer.exe`

  // Attach Phantom.JS. | 设置 Phantom.JS.
  settings.test_settings.default.desiredCapabilities['phantomjs.binary.path'] = phantomjs.path

  // Setup browser that runs testing. | 设置使用的浏览器.
  settings.test_settings.default.desiredCapabilities.browserName = browser

  return settings
})(require('./nightwatch.json'))
