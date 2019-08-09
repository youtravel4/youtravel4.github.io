// ES6 Aside: const and let, section part 13

var nameVar = 'ShoePac';
var nameVar = 'Prince'; //redefining the same variable, this value is going to be used later on in the code
//nameVar = 'Prince'; //one can also REASSING the same variable 
console.log('nameVar', nameVar);

let nameLet = 'Hatty';
//let nameLet = 'Hattee'; // CANNOT REDEFINE let variable
nameLet = 'Hattee'; //but one can REASSIGN let variable
console.log('nameLet', nameLet);

const nameConst = 'Princess';
//const nameConst = 'Precious'; //one CANNOT REASSIGN OR REDEFINE const variable
console.log('nameConst', nameConst);

//Block scoping

function getLoveName() {
    let loveName = 'Pahuljica';
    return loveName;
}

const loveName = getLoveName();
console.log(loveName);

var fullName = 'Shoe Pac';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);

