const AddNoteScreen = require("./add-note.screen")

class deleteNoteScreen {

    get noteEntry(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')
    }
    get moreBtn(){
        return $('~More')
    }
    get deleteBtn(){
        return $('//*[@text="Delete"]')
    }
    get navIcon(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]')
    }
    get trashCanItem(){
        return $('//*[@text="Trash Can"]')
    }

    
    async skip(){
        await AddNoteScreen.skipBtn.click()
        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed()
    }
    async addAndSaveNote(title,body){
        await AddNoteScreen.addNoteBtn.click()
        await AddNoteScreen.addText.click()
        expect(AddNoteScreen.noteBody).toBeDisplayed()

        // add note title
        await AddNoteScreen.noteTitle.addValue(title)

        // add note body
        await AddNoteScreen.noteBody.addValue(body)

        // save the changes
        await AddNoteScreen.saveNote()

        // assertion
        expect(AddNoteScreen.editBtn).toBeDisplayed()
        expect(AddNoteScreen.viewNote).toHaveText(body)
    }
}

module.exports = new deleteNoteScreen()