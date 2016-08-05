class Person {

    name: string;

    age : number;

    private email : string;

    constructor(name : string, age : number) {

        this.name = name;

        this.age = age;

        this.email = this.name + this.age + '@supermail.com';

    }

    getName () : string {

        return this.name;

    }

    getAge () : number {

        return this.age;

    }

    getEmail () : string {
        return this.email;
    }
}

export = Person