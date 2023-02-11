const DeleteNoteScreen = require("../../screenobjects/android/delete-note.screen")

describe('Add Notes',()=>{
    it('delete a note,',async ()=>{
        await DeleteNoteScreen.skip()

        await DeleteNoteScreen.addAndSaveNote("Test title","Test body")
        await driver.back()
        const note = await DeleteNoteScreen.noteEntry.getText()

        // click on the note
        await DeleteNoteScreen.noteEntry.click()
        

        // click on more icon
        await DeleteNoteScreen.moreBtn.click()

        // click on delete item
        await DeleteNoteScreen.deleteBtn.click()

        // accept aler
        await driver.acceptAlert()

        // click on nav icon
        await DeleteNoteScreen.navIcon.click()

        // click on trash can item
        await DeleteNoteScreen.trashCanItem.click()

        // assertions
        const trashcanItem = await DeleteNoteScreen.noteEntry.getText()

        await expect(trashcanItem).toEqual(note)


    })
})