/**
 *  Nightwatch Configuration file.
 *  Loading settings in "nightwatch.json" and create new config for nightwatch.
 *  You can check [this](http://nightwatchjs.org/guide#settings-file) to find all configuration about Nightwatch.
 *
 *  Do not move both this and "nightwatch.json" files to somewhere else.
 */
const process = require('process')
const path = require('path')
const phantomjs = require('phantomjs-prebuilt')

const baseConfig = require('./nightwatch.json')
const seleniumConfig = require('./config/selenium')

const rootPath = path.resolve(__dirname)
const driverPath = `${rootPath}/node_modules/selenium-standalone/.selenium`

module.exports = (settings => {
  // Setup the browser we use. We will use phantomjs by default.
  let browser = process.argv[2]
    ? process.argv[2].replace(/-/g, '')
    : baseConfig.default_browser

  if (browser === 'ie') {
    browser = 'internet explorer'
  }

  // Tell Nightwatch where is the Selenium. | 设置 Selenium 所在位置。
  settings.selenium.server_path = `${driverPath}/selenium-server/${seleniumConfig.selenium.version}-server.jar`

  // Setup firefox driver.
  settings.selenium.cli_args['webdriver.gecko.driver'] =
    `${driverPath}/geckodriver/${seleniumConfig.driver.firefox.version}-${seleniumConfig.driver.firefox.arch}-geckodriver`

  // Setup Chrome web driver. | 加载 Chrome Driver.
  settings.selenium.cli_args['webdriver.chrome.driver'] =
    `${driverPath}/chromedriver/${seleniumConfig.driver.chrome.version}-${seleniumConfig.driver.chrome.arch}-chromedriver`

  // Setup IE web driver. | 加载 IE Driver.
  settings.selenium.cli_args['webdriver.ie.driver'] =
    `${driverPath}/iedriver/${seleniumConfig.driver.ie.version}-${seleniumConfig.driver.ie.arch}-IEDriverServer.exe`

  // Setup Edge web driver.
  settings.selenium.cli_args['webdriver.edge.driver'] =
    `${driverPath}/edgedriver/${seleniumConfig.driver.edge.version}-MicrosoftEdgeDriver.exe`

  // Setup Phantom.JS. | 设置 Phantom.JS.
  settings.test_settings.default.desiredCapabilities['phantomjs.binary.path'] = phantomjs.path

  // Setup browser that runs testing. | 设置使用的浏览器.
  settings.test_settings.default.desiredCapabilities.browserName = browser

  return settings
})(baseConfig)
