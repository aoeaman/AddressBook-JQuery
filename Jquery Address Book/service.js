var contacts = [];
var SelectedContact;

function Insert(Person) {
    Person.id = $.generateID();
    $.getValuesFromForm(Person)
    contacts.push(Person);
    return Person;
}

function getContact(id) {
    return contacts.find(c => c.id == id);
}

function Delete() {
    let value = getContact(SelectedContact);
    contacts = contacts.filter(function (ele) {
        return ele != value;
    });
}

$.generateID = function () {
    return 'xxxxxxxx'.replace(/[x]/g,
        function (c) {
            let r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }).toUpperCase();
}