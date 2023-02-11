describe('iOS Find Element',()=>{
    it('find element by accessibility id',async()=>{
        await $('~Alert Views').click()
        await $('~Simple').click()
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best")
    })

    it('find by tag name', async()=>{
        // single element
        console.log(await $('XCUIElementTypeStaticText').getText())

        // multiple elements
        const textEls = await $$('XCUIElementTypeStaticText')

        for (const element of textEls) {
            console.log(await element.getText())
        }
    })

    it('find element by xpath',async()=>{
        // xpath = (//tagname[@attribute=value])

        await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click()
        await $('//XCUIElementTypeStaticText[@label="Simple"]').click()
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best")
    })

    it('find element by class chains', async()=>{

        // const alertText = '**/XCUIElementTypeStaticText[`label == "Alert Views"`]'
        const alertText = '**/XCUIElementTypeStaticText[`label CONTAINS "Alert"`]'

        await $(`-ios class chain:${alertText}`).click()
        await $('//XCUIElementTypeStaticText[@label="Simple"]').click()
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best")
    })

    it('find element by predicate string', async()=>{
        // const alertText = 'label == "Alert Views"'
        const alertText = 'value BEGINESWITH[c] "alert"'

        await $(`-ios predicate string:${alertText}`).click()
        await $('//XCUIElementTypeStaticText[@label="Simple"]').click()
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best")
    })

    it('Exercise - Enter text in the Search field', async()=>{
        // click on Search
        await $('~Search').click()

        // click on Default
        await $('//*[@label="Default"]').click()

        // enter value in the search field
        const searchField = 'type == "XCUIElementTypeSearchField"'
        await $(`-ios predicate string:${searchField}`).addValue('I love this course')

        // verify if search field has value
        await expect(await $(`-ios predicate string:${searchField}`)).toHaveAttr("value")

        // clear text in the search field using x button
        await $('~Clear text').click()

        // verify if search field has value
        await expect(await $(`-ios predicate string:${searchField}`)).not.toHaveAttr("value") 
    })

   
})