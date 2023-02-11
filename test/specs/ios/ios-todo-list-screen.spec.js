import ItemScreen from "../../screenobjects/ios/item.screen"
import ListScreen from "../../screenobjects/ios/list.screen"


describe('Todo List',()=>{

    before(async()=>{
        // create to do 
        await ListScreen.createListBtn.click()
        await ListScreen.listNameInput.addValue("Things to do today")
        await ListScreen.createBtn.click()
        await expect(ListScreen.listNameField("Things to do today")).toBeExisting()
        await ItemScreen.listNameField("Things to do today").click()
    })
    it('Create a Todo List',async()=>{
        // click on to do entry and add entry
        await ItemScreen.addBtn.click()
        await ItemScreen.toDoTitleField.addValue("Buy Grocery")
        await ItemScreen.todoDueField.click()
        await ItemScreen.datePickerBtn.click()
        await ItemScreen.dueDate("Friday, February 17").click()
        await ItemScreen.backWindow.click()
        await ItemScreen.createBtn.click()

        // verify the to do item
        expect(await $('~Buy Grocery')).toBeExisting()
        expect(ItemScreen.dueDate("Friday, February 17")).toBeExisting()
    })

})