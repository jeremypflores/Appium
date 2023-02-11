describe('Todo List',()=>{
    it('Create a Todo List',async()=>{
        // create to do 
        await $('//*[@name="Create list"]').click()
        await $('//*[@value="List Name"]').addValue("Things to do today")
        await $('~Create').click()
        
        await expect(await $('~Things to do today')).toBeExisting()

        // click on to do entry and add entry
        await $('~Things to do today').click()
        await $('~Add').click()
        await $('//*[@value="Title"]').addValue("Buy Grocery")
        await $('//*[@value="Due"]').click()

        // select due date
        await $('~Date Picker').click()
        await $('~Friday, February 17').click()
        await $('//XCUIElementTypeWindow[@index=2]').click()

        // click Create button
        await $('~Create').click()

        // verify the to do item
        expect(await $('~Buy Grocery')).toBeExisting()
        expect(await $('~Friday, February 17')).toBeExisting()


    })
})