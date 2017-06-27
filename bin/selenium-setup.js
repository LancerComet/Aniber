/**
 * Run this script to install selenium.
 * You must run this at least once to use Aniber.
 *
 * Checkout Readme.md for more detail.
 */

const selenium = require('selenium-standalone')
const seleniumConfig = require('../config/selenium')
const ora = require('ora')

const spinner = ora('Installing...').start()

selenium.install({
  version: seleniumConfig.selenium.version,
  baseURL: seleniumConfig.selenium.baseURL,
  drivers: seleniumConfig.driver,
  logger: function (message) { console.log(message) },
  progressCb: function (totalLength, progressLength, chunkLength) {}
}, function (err) {
  if (err) {
    console.error(`[Error] Error occurred during installation Selenium: ${err}`)
    spinner.fail()
    process.exit(1)
  }

  spinner.succeed()
  console.log('Installation finished.')
  process.exit(0)
})
