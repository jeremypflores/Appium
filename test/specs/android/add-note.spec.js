describe('Add Notes',()=>{
    it('Skip tutorial', async()=>{
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click()
        await expect($('//*[@text="Add note"]')).toBeDisplayed()
    
    })
    
    it('add a note, save changes & verify note',async()=>{
        await $('//*[@text="Add note"]').click()
        await $('//*[@text="Text"]').click()
        expect($('//*[@text="Editing"]')).toBeDisplayed()

        // add note title
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').addValue("Fav Anime List")

        // add note body
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').addValue("Naruto\nOne Piece\nAOT")

        // save the changes
        await driver.back()
        await driver.back()

        // assertion
        expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed()
        expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText("Naruto\nOne Piece\nAOT")

    })
})