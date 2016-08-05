import Person = require('./namespaces/person');

let person = new Person('Test', 22);

console.log(person.getName());
console.log(person.getAge());
console.log(person.getEmail());
