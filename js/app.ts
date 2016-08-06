
require(['namespaces/person'], (Person) => {

    let person = new Person('New', 25);

    console.log(person.getName());
    console.log(person.getAge());
    console.log(person.getEmail());


});

