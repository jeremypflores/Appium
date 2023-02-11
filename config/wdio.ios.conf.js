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
    '../test/specs/ios/ios-webview*.js'
]

//
// ============
// Capabilities
// ============
config.capabilities = [
    {
        'platformName': 'ios',
        'appium:platformVersion': '16.2',
        'appium:deviceName': 'iPhone 14',
        'appium:automationName': 'XCUITest',
        'appium:app': path.join(process.cwd(),'./app/ios/wdioNativeDemoApp.app')
    }
]

config.services = [['appium',
// {
//     args: {
//         address: 'localhost',
//         port: 4723,
//         relaxedSecurity: true
//     },
//     logPath: './'
// }
]];

exports.config = config