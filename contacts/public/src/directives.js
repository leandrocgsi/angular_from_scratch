angular.module('ContactsApp')
    .value('FieldTypes', {
        text: ['Text', 'should be text'],
        email: ['Email', 'should be an email address'],
        number: ['Number', 'should be a number'],
        date: ['Date', 'should be a date'],
        datetime: ['Datetime', 'should be datetime'],
        time: ['Time', 'should be a time'],
        month: ['Month', 'should be a month'],
        week: ['Week', 'should be a week'],
        url: ['URL', 'should be an URL'],
        tel: ['Phone Number', 'should be phone number'],
        color: ['Color', 'should be color']
    });