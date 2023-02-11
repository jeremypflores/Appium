class AddNoteScreen {
 get skipBtn() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]')
 }
 get addNoteTxt(){
    return $('//*[@text="Add note"]')
 }
 get addNoteBtn(){
    return $('//*[@text="Add note"]')
 }
 get addText(){
    return $('//*[@text="Text"]')
 }
 get editing(){
    return $('//*[@text="Editing"]')
 }
 get noteTitle(){
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
 }
 get noteBody(){
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
 }
 get editBtn(){
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')
 }
 get viewNote(){
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')
 }

 async saveNote(){
    await driver.back()
    await driver.back()
 }
}

module.exports = new AddNoteScreen()