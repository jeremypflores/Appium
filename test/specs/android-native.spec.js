describe('Android Native Feature Tests',()=>{
    it('Access an Activity directly', async()=>{
        // access activity
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples")

        // pause
        await driver.pause(3000)

        // assertion
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist()
    })

    it('Working with Dialog Boxes', async()=>{
        // access activity
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples")

      // click on first dialog
      await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click()

    //   // accept Alert
    //   await driver.acceptAlert()

    //   // dismiss Alert
    //   await driver.dismissAlert()

      // get alert text
      console.log('ALERT TEXT --->',await driver.getAlertText())
    
      // click on the OK button
      await $('//*[@resource-id="android:id/button1"]').click()

      // assertion - dialog box is no longer visible
      await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist()
    })

    it('Vertical scrolling', async()=>{
      await $('~App').click()
      await $('~Activity').click()
      

      // scroll to the end (not satable if element gets moved)
      // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
      // await $('~Secure Surfaces').click()

      // scrollTextIntoView - more stable
      await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click()

      await expect($('~Secure Dialog')).toExist()

    })

    it('Horizontal Scrolling', async()=>{
      await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.Gallery1")

      await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
      await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()')

      await driver.pause(3000)
    })


    it.only('Exercise 2', async()=>{
      // access the date picker
      await $('~Views').click()
      await $('~Date Widgets').click()
      await $('~1. Dialog').click()

      // get current date
      const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]')
      const currentDate = date.getText()

      // click on change the date button
      await $('~change the date').click()

      // scroll right to the next month
      await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')

      // select the 10th date
      await $('//*[@text="10"]').click()

      // click on ok button
      await $('//*[@resource-id="android:id/button1"]').click()

      // verify the updated date
      await expect(await date.getText()).not.toEqual(currentDate)
    })
})