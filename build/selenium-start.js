/*
 *  Selenium Start By LancerComet at 1:16, 2016/7/17.
 *  # Carry Your World #
 *  ---
 *  Selenium 启动配置.
 */

const selenium = require('selenium-standalone')
const seleniumConfig = require('./selenium-conf.js')

selenium.start({
  drivers: seleniumConfig.driver
}, (err, child) => {
  if (err) throw new Error(`Selenium 启动失败 | Selenium startup failed: ${err}`)
  console.log(`Selenium has been started，the PID: ${child.pid}`)
  console.log('If you don\'t need Selenium anymore, just kill the process with this PID.')
})
