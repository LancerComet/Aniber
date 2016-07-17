module.exports = {
  'Testing Demo': function (client) {
    client.url('http://live.bilibili.com').maximizeWindow()
   
    client.expect.element('body').to.be.present.before(3000)
    client.expect.element('.top-nav-login-btn.last').to.be.visible
   
    client.end()
  }
}
