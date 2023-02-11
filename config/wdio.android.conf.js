const path = require('path');
const {config} = require('./wdio.shared.conf')

//
// ====================
// Runner Configuration
// ====================
config.port = 4723,

//
// ============
// Specs
// ============
config.specs = [
    '../test/specs/android/add-note-screen*.js'
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
        'appium:autoGrantPermissions':true
    }
]

config.services = ['appium']

exports.config = config