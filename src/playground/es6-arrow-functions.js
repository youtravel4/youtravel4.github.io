/* function square (x) {
    return x * x;
};

console.log(square(4));


//the same function but ARROW

const squareArrow = (x) => {
    return x * x;
}

// WHEN ONLY ONE SINGLE COMMAND UNDER ARROW FUNCTION CONSTRUCTION

const newsquareArrow = (x) => x * x;  


console.log(newsquareArrow(5));
console.log(squareArrow(7));

 */

// CHALLENGE 5 

//use arrow functions
//getFirstName('Mike Smith') -> "Mike"
//create regular arrow function
//create second arrow function using shorthand syntax

const fullName = 'Hate Kujrakovic Mesic'

const getMiddleName = (string) => {
    return string.split(' ')[1];      // kind of hard code with [1]
};

console.log('Middle name: ', getMiddleName(fullName));

const getLastName = (string) => string.split(' ').pop();   // better to use pop to get always the latest name, not hard codeing it

console.log('Last name: ' , getLastName(fullName));
