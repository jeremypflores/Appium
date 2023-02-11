describe('iOS Webview',()=>{
    it('Working with dynamic webview',async()=>{
        await $('~Webview').click()

       // wait until you get multiple context
       await driver.waitUntil(async()=>{
        const context = await driver.getContexts()
        return context.length > 1
       }, {timeout: 30000, timeoutMsg: 'Timed out waiting for another context'})

        // get all the context
        const contexts = await driver.getContexts()

        // switch to the webview context
        await driver.switchContext(contexts[1])

        // assertion
        const subtitleText = await $('.hero__subtitle')
        await expect(subtitleText).toHaveTextContaining('automation')

        // switch back to the native app
        await driver.switchContext('NATIVE_APP')
        await $('~Home').click()

        // assertion
        const webdriverText = await $('//*[@name="WEBDRIVER"]')
        await expect(webdriverText).toBeDisplayed()

    })
})