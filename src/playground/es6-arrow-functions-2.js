// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    //console.log(arguments);  // for an arrow function one looses access to arguments
    return a + b;
};

console.log(add(55,1));

// this keyword - no longer bound

const user = {
    name: 'Shoe Pac',
    cities: ['Zagreb', 'Sarajevo', 'Graz'],
    printPlacesLived () {
        return this.cities.map( (city) => this.name + ' has lived in ' + city + '!' ); 

        //return cityMessages;

        /* this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        }); */
    }
};

console.log(user.printPlacesLived());

//CHALLENGE 6 

// create a multiplier object which consists of: 

    // array of numbers - number
    // single number - multiplyBy
    // method multiply - has to return a new array where number have been multiplied

//screen out the console number, multiplyBy and multiply
// example -> [1, 2, 3] 2 [1, 4, 6]

const multiplier = {
    number: [3, 4, 5],
    multiplyBy: 3,
    multiply () {
        return this.number.map((x) => x * this.multiplyBy)
    }

} 
console.log('[' + multiplier.number + '] *', multiplier.multiplyBy + ' =', '[' + multiplier.multiply() + ']');
