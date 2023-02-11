const AddNoteScreen = require("../../screenobjects/android/add-note.screen")

describe('Web Browser Access', () =>{
    before(async()=>{
        await AddNoteScreen.skipBtn.click()
    })

    it('Access external link and verify content in the browser',async()=>{
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click()

        // click on fb link
        await $('//*[@text="Like us on Facebook"]').click()

        // // // get current context
        // // console.log(await driver.getContext())

        driver.pause(2000)

        // get all the context
        await driver.getContexts()

        // switch to webview chrome context
        await driver.switchContext('WEBVIEW_chrome')

        // assert the cover image is displayed
        const coverImage = await $('.img._4s0y')
        await expect(coverImage).toBeDisplayed()

        // switch back to app
        await driver.switchContext('NATIVE_APP')
        await driver.back()

        // continue with the flow
        const addNoteText = await $('//*[@text="Add note"]')
        await expect(addNoteText).toBeDisplayed()
    })
})