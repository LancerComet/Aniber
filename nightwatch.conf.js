/*
 *  Nightwatch Configuration By LancerComet at 0:51, 2016/7/17.
 *  # Carry Your World #
 *  ---
 *  Nightwatch Configuration file.
 *  Loading settings in "./build" and attach them to Nightwatch. 
 */

const seleniumConfig = require('./build/selenium-conf')
const path = require('path')

module.exports = (function (settings) {
    // Tell Nightwatch where is the Selenium. | 设置 Selenium 所在位置。
    settings.selenium.server_path = `${path.resolve()}/node_modules/selenium-standalone/.selenium/selenium-server/${seleniumConfig.selenium.version}-server.jar`

    // Attach Chrome web driver. | 加载 Chrome Driver.
    settings.selenium.cli_args['webdriver.chrome.driver'] = `${path.resolve()}/node_modules/selenium-standalone/.selenium/chromedriver/${seleniumConfig.driver.chrome.version}-${seleniumConfig.driver.chrome.arch}-chromedriver`

    // Attach IE web driver. | 加载 IE Driver.
    settings.selenium.cli_args['webdriver.ie.driver'] = `${path.resolve()}/node_modules/selenium-standalone/.selenium/iedriver/${seleniumConfig.driver.ie.version}-${seleniumConfig.driver.ie.arch}-IEDriverServer.exe`
    
  return settings
})(require('./nightwatch.json'))
