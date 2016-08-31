
define('jquery', [], function () {return jQuery;} );

require([
    'jquery',

    'namespaces/person',

    'views/person-view'
], (

    $,
        Person,

        PersonView

) => {

    let person = new Person('New', 25);

    let personView = new PersonView($('[data-person-name]'));

    personView.showPersonName(person.getName());


});

