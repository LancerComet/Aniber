/*
 *  Nightwatch Configuration By LancerComet at 0:51, 2016/7/17.
 *  # Carry Your World #
 *  ---
 *  Nightwatch 配置文件.
 */

const seleniumConfig = require('./build/selenium-conf')
const path = require('path')

module.exports = (function (settings) {
    // 设置 Selenium 所在位置。
    settings.selenium.server_path = `${path.resolve()}/node_modules/selenium-standalone/.selenium/selenium-server/${seleniumConfig.selenium.version}-server.jar`

    // 加载 Chrome Driver.
    settings.selenium.cli_args['webdriver.chrome.driver'] = `${path.resolve()}/node_modules/selenium-standalone/.selenium/chromedriver/${seleniumConfig.driver.chrome.version}-${seleniumConfig.driver.chrome.arch}-chromedriver`
    
  return settings
})(require('./nightwatch.json'))
