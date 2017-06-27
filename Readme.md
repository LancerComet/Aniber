# Aniber
> Aniber is an e2e testing tool presets powered by Selenium and Nightwatch.
> © 2016 LancerComet.

## Introduction
is an e2e testing tool presets powered by Selenium and Nightwatch.
It's standalone and you can test anything you want to any site.

![](https://raw.githubusercontent.com/LancerComet/Aniber/master/preview.gif)


## Get started

### Setup.
1. `git clone`.
2. Run `npm install` to get all dependencies.
3. Run `npm run selenium-setup` to install selenium.

### Something you may know ...
- You must have Java 7 or later version runtime installed, and make sure command "java" is available. (Configured in PATH)
- By default, Aniber will call **Phantomjs** up to run testing cases, but it allows you to use **Internet Explorer**, **Firefox** and **Chrome**. See the NPM Scripts command below.

### Write testing cases.
1. Make a new **.js** file and save it to folder **./tests**. You can name this file what you want.
2. Write testing code.
> You may want to check the [documents](http://nightwatchjs.org/guide#unit-testing) about how to write testing case and using APIs.

  Here is an example.
  ```
  module.exports = {
    'Find the answer.': function (client) {
      /*
       * In this case, we will open bing.com and search "what is microsoft" and take a screenshot to save our answers.
       */

      const searchInput = '#sb_form_q'
      const searchBtn = '#sb_form_go'
      const question = 'what is microsoft'

      // Launch browser and open bing.com.
      client.url('http://bing.com').maximizeWindow()

      // Make sure both "body" and search input are available.
      client.expect.element('body').to.be.present
      client.expect.element(searchInput).to.be.visible
      client.pause(2000)  // Just wait 2s.

      // Type "what is microsoft" in searching input and submit.
      client.setValue(searchInput, question)
      client.click(searchBtn)
      client.pause(2000)

      // Let's save these answers to a screenshot.
      client.expect.element('body').to.be.present
      client.saveScreenshot('reports/answers.png')  // Take a screenshot and save to "reports/answer.png".
      client.end()
    }
  }
  ```

### Run your test.
Run `npm start` to run your testing cases.
If you want use a different browser, see the commands below.

## NPM Scripts
 - `npm start`: Run all testing cases by using default settings. It will use **Phantomjs** to run testing cases.
 - `npm run ie`: Run all testing cases by using **Internet Explorer**. You might do some extra work. Check these stuff below.
 - `npm run firefox`: Run all testing cases by using **Firefox**. Make sure Firefox has been installed.
 - `npm run chrome`: Run all testing case by using **Chrome**. Make sure Chrome has been installed.
 - `npm run selenium-setup`: Install Selenium to your project.
 - `npm run selenium-start`: Startup Selenium manually.
 - `npm run lint`: Run ESLint manually. It will only check project configuration files.

## For Internet Explorer user
You must do something extra:
 - Tune off "Enhanced Protected Mode" in Internet Explorer "Option -> Security" panel for each level if you are using IE 10 and higher.
 - Set your "Zoom Level" to 100%.

## File Structure
```
>
|-  build
|     |- selenium-conf.js     # Selenium and Driver configuration.
|     |- selenium-setup.js    # Selenium setup function.
|     |- selenium-start.js    # Selenium startup function.
|
|-  reports                   # Testing report.
|-  tests                     # Testing cases.
|
|-  .editorconfig             # Editor Config file to override your editor. You can change or delete it if you hate it :)
|-  .eslintignore             # ESLint ignoring list. Put everyting that you don't want it to be checked by ESLint here.
|-  .eslintrc.js              # ESLint configuration.
|-  nightwatch.json           # Nightwatch configuration file.
|-  nightwatch.conf.js        # Nightwatch configuration file.
|-  package.json              # Project configuration.
|-  Readme.md                 # Introduction.
|-  startup.js                # Entry file. To call up app.
```
