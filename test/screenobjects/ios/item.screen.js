class ItemScreen {

    get addBtn(){
        return $('~Add')
    }
    listNameField(name){
        return $(`~${name}`)
    }

    get toDoTitleField(){
        return $('//*[@value="Title"]')
    }

    get todoDueField(){
        return $('//*[@value="Due"]')
    }

    get datePickerBtn(){
        return $('~Date Picker')
    }

    dueDate(date){
        return $(`~${date}`)
    }

    get backWindow(){
        return $('//XCUIElementTypeWindow[@index=2]')
    }

    get createBtn(){
        return $('~Create')
    }
}

module.exports = new ItemScreen()