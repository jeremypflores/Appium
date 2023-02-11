const AddNoteScreen = require("../../screenobjects/android/add-note.screen")

describe('Add Notes',()=>{
    it('Skip tutorial', async()=>{
        await AddNoteScreen.skipBtn.click()
        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed()
    
    })
    
    it('add a note, save changes & verify note',async()=>{
        await AddNoteScreen.addNoteBtn.click()
        await AddNoteScreen.addText.click()
        expect(AddNoteScreen.noteBody).toBeDisplayed()

        // add note title
        await AddNoteScreen.noteTitle.addValue("Fav Anime List")

        // add note body
        await AddNoteScreen.noteBody.addValue("Naruto\nOne Piece\nAOT")

        // save the changes
        await AddNoteScreen.saveNote()

        // assertion
        expect(AddNoteScreen.editBtn).toBeDisplayed()
        expect(AddNoteScreen.viewNote).toHaveText("Naruto\nOne Piece\nAOT")

    })
})