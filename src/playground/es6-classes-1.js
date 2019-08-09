// ES6 Classes - 1 , section part 24

class Person {
    constructor(name='xXx') {
        this.name = name;

    }
    getGretting(){
        //return 'Hi there, my name is ' + this.name + ' and I like you!';
        return `Hi there, my name is ${this.name} and I like you!`
    }
}

const me = new Person('Mirza');
//console.log(me.getGretting());

const other = new Person();
//console.log(other.getGretting());


//Challenge 13

// create a new class Car
//setup constructor to take name and year of production (default to 0)
//setup a new method getDescription - ex. This Mercedes Benz is 18 years old.

class Car {
    constructor(name='u nknown', year=0, owner='Anonymous') { // ='Anonymous' it is going to be so set if we haven't defined it differently
        this.name = name;
        this.year = year;
        this.owner = owner;
    }
    getData(){
        return `${this.owner} drives ${this.name} which is ${new Date().getFullYear()-this.year} years old.`
    }
}

const unknown = new Car();

const omega = new Car('Mazda', 2008, 'Mirza');
//console.log(omega);
//console.log(omega.getData());

const danileo = new Car('Audi', 2010, 'Igor');
//console.log(danileo);
//console.log(danileo.getData());
//console.log(unknown.getData());


// ES6 Classes - 2, section part 25

class Electric extends Car {
    constructor (name, year, owner, motor) {
        super(name, year, owner);     // merge name and year from parent class Car
        this.motor = motor; 
    }
    hasMotor() {
        return !!this.motor;  // checking if motor is defined -> e.g. !!'mirza' returns true, !!'' returns false
    }
    getData() {
       let data = super.getData();

       if (this.hasMotor()){
           data += ` It has ${this.motor} motor.`;
       }

       return data;
    }
}

//const tesla = new Electric ('Tesla', 2014, 'Mirzinho', 'electric');
//const volvo = new Electric();
//
//console.log(tesla.getData());
//console.log(volvo.hasMotor());
//
//console.log(volvo.getData());
//
//console.log(volvo);
//console.log(tesla);


//CHALLENGE 14

// create a new class Citizen with parameters name, surname, ID and getDetails for showing details of citizens
// create its subclass Traveler  
// add support for homeLocation
// override getDetails
// if there is homeLocation - > 1. Hi. I am Shoe Pac. I'm visiting from Zagreb.
// else -> 2. Hi. I am Shoe Pac.
// test it with console

class Citizen {
    constructor(name='xXx', surname='zZz', ID='unknown') {
        this.name = name; 
        this.surname = surname; 
        this.id = ID;
    }
    getDetails() {
        return `Hi. Here is ${this.name} ${this.surname}. His/her ID is ${this.id}. `;
    }
}


class Traveler extends Citizen {
    constructor(name, surname, ID, homeLocation) {
        super(name, surname, ID);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }
    getDetails() {
        let details = super.getDetails(); 

        if (this.hasHomeLocation()) {
            details += ` He/she is visiting from ${this.homeLocation} .`
        }

        return details;
    }
}

const borat = new Traveler ('Borat', 'Koudahhahan', 1234659788, 'Kazahstan');
const incognito = new Traveler();

console.log(borat);
console.log(borat.getDetails());

console.log(incognito);
console.log(incognito.getDetails());
