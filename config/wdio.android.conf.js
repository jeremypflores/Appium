const path = require('path');
const {config} = require('./wdio.shared.conf')

//
// ====================
// Runner Configuration
// ====================
config.runner = 'local',
config.port = 4723,

//
// ============
// Specs
// ============
config.specs = [
    path.join(process.cwd(), './test/specs/android/webview*.spec.js')
]

//
// ============
// Capabilities
// ============
config.capabilities = [
    {
        'appium:platformName': 'Android',
        'appium:platformVersion': '12.0',
        'appium:deviceName': 'Pixel 4',
        'appium:automationName': 'UIAutomator2',
        'appium:app': path.join(process.cwd(),'./app/android/ColorNote+Notepad.apk'),
        'appium:autoGrantPermissions':true,
    }
]

config.services = [['appium', {
  args: {
    address: 'localhost',
    port: 4723,
    relaxedSecurity: true
  },
  logPath: './'
}]];
  
exports.config = config