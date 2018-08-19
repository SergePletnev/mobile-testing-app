'use strict'

function addTask(title, description) {
    $('#addTaskButton').click();
    $('#taskTitleEditText').setValue(title);
    $('#taskDescriptionEditText').setValue(description);
    browser.hideDeviceKeyboard();
    $('#saveTaskButton').click();
}

function modifyTask(newTitle, newDescription) {
    $$('#text1')[0].click();
    $('#taskTitleEditText').setValue(newTitle);
    $('#taskDescriptionEditText').setValue(newDescription);
    browser.hideDeviceKeyboard();
    $('#saveTaskButton').click();
}

describe('Base app functinality', () => {

    it('should be possible to add new task', () => {
        addTask('New Task', 'New Description');
        const newTask = $$('#text1')[3];
        expect(newTask.getText()).toEqual('New Task');
    });

    it('should be possible to modify task description', () => {
        modifyTask('Modified Task', 'Modified Description');
        const modifiedTask = browser.element('android= new UiSelector().resourceId("android:id/text1").instance(0)');
        expect(modifiedTask.getText()).toEqual('Modified Task');
    });

});
