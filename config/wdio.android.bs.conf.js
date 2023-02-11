require('dotenv').config()
const {config} = require('./wdio.shared.conf')

//
// ============
// Browserstack
// ============
config.user = process.env.BROWSERSTACK_USER
config.key = process.env.BROWSERSTACK_KEY

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
        'platformName': 'Android',
        'platformVersion': '12.0',
        'deviceName': 'Samsung Galaxy S22',
        'automationName': 'UIAutomator2',
        'app': 'bs://a7d71aa1b4a6dc47c0e69a6d4dbb6b3d4a623f99',
        'autoGrantPermissions':true
    }
]

//
// ============
// Services
// ============
config.services = [['browserstack', { browserstackLocal: true }]]

exports.config = config