//ES5

function Person(name, age){ //if no parameter in call has no arguments
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function(){
    return `My name is ${this.name}. I'm ${this.age} years old!`;
}

//Programmer Constructor 
function Programmer(name, age, language){
    Person.call(this, name, age);
    this.language = language;
}

//in order to inheritor the methods! gotta do this
Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.constructor = Programmer;
const newP = new Programmer("May", 23, "R");

console.log(newP.constructor);
const a = new Programmer("john", 33, "Java");
const b = new Programmer("lindsey", 20, "ruby");
//this overrides the person greet method !
Programmer.prototype.greet = function(){
    return `${Person.prototype.greet.call(this)} I code in ${this.language}!`
}


console.log(a.greet());
console.log(b.greet());



//Fighter Constructor 
function Fighter(name, age, art){
    Person.call(this, name, age);
    this.art = art;
}

Fighter.prototype = Object.create(Person.prototype);
Fighter.prototype.constructor = Fighter;


Fighter.prototype.greet = function(){
    return `${Person.prototype.greet.call(this)} I love fighting in ${this.art}`;
}
const johnny = new Fighter("johnny", 43, "karate");


console.log(johnny.greet());




console.log(johnny.constructor);

/////////////////////////////////////////////////

//ES6 Classes

class Person0{
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
    //no need for object
    greet(){
           return `My name is ${this.name}. I'm ${this.age} years old!`;
    }
}

class Programmer0 extends Person0{
    constructor(name, age, language){
        super(name, age);
        this.language = language;
    }

    greet(){
        return `${super.greet()} I code in ${this.language}`;
    }

    talk(){
        return `I'm ${this.name} and I am ${this.age} years old! I can speak ${this.language}!`;
    }
}

class Fighter0 extends Person0{
    constructor(name, age, art){
        super(name, age);
        this.art = art;
    }
    fight(){
        return "I'm fighting, at least I am pretending to be...";
    }
}

const instance = new Person0("sam", 24);
const tod = new Programmer0("tod", 32, "c++");
console.log(tod.talk());
instance.name //sam

const eric = new Fighter0("eric", 23, "jiu jitsu");

// console.log(eric.fight());

// console.log(tod.greet());

/////////////////////////////////////////////////
//Prototypal Inheritance vs Classical Inheritance

// Prototypal Pattern
let person = {
    greet: function(){
        console.log(`Hi, my name is ${this.name}`);
    }
}

// let tom = Object.create(person);
// tom.name = "tommy hilson";

// let july = Object.create(person);
// july.name = "julia bee";
// tom.greet();
// july.greet();

let programmer = Object.create(person);
programmer.code = function(){
    console.log(`I like to code in ${this.language}`);
}

let john = Object.create(programmer);
john.language = "java";

let joe = Object.create(programmer);
joe.language = "Pascal";

joe.code();


let fighter = Object.create(person);
fighter.fight = function(){
    console.log(`Let's fight. I practice ${this.martialArts}`);
}


let tjDillashaw = Object.create(fighter);
let khabib = Object.create(fighter);
khabib.martialArts = "sambo wrestling";
tjDillashaw.martialArts = "Tai Chi";
tjDillashaw.fight();

khabib.fight();

