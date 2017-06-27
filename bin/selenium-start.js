/**
 * This script is used for starting up selenium server.
 * Usually, you don't need to launch selenium server manually.
 * But you can execute this script to launcher selenium if you want.
 */

const selenium = require('selenium-standalone')
const seleniumConfig = require('../config/selenium')

selenium.start({
  drivers: seleniumConfig.driver
}, (err, child) => {
  if (err) {
    console.error(`[Error] Selenium startup failed: ${err}`)
    return process.exit(1)
  }

  console.log(`Selenium has been started，the PID: ${child.pid}`)
  console.log('If you don\'t need Selenium anymore, just kill the process with this PID.')
})
