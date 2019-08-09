console.log('App.js is running like a baby, hell yeah!');

// JSX - JavaScript XML, section part 10

const templateDemo = (
<div>   
    <h1> Hate&Prince </h1> 
    <p> 28.04.2018. </p>
    <ol>
        <li> Pepperfield </li>
        <li> Naida&Semin </li>
        <li> Lukavac </li>
        <li> Love </li>
        <li> Bebooo </li>    
    </ol>
</div>
);

//CHALLENGE 1

//Create a templateTwo var JSX expression:
// div
//  h1 --> Shoe Pac
//  p -->  Age: 28
//  P --> Location: Kamenarka 37, Omega-Software, Zagreb
// Render templateTwo insted of template (currently)

const templateChallenge1 = (
    <div>
        <h1>Hattee</h1>
        <p> Age: 22 </p>
        <p> Gender: female </p>
        <p> Location: Sarajevo, Bosnia&Herzegovina </p>
    </div>
);

// JSX Expressions section part, 11
const user = {

    name: 'Hate',
    lastname: 'Mesic',
    gender: 'female',
    age: 22,
    location: 'Trg oteškog bataljona 31, Sarajevo, B&H',
    commonlocation: 'EU'
}


const userName = 'Mirzinho';
const userAge = 28;
const userLocation = 'Gumerec 42, Zagreb, Croatia';
//const commonLocation ='EU'

const templateTwo = (
<div>
    <h1>{userName}</h1>
    <p> Gender: male </p>
    <p> Age: {userAge} </p>
    <p> Location: {userLocation} </p>
</div>
);

const templateOne =  (
<div>
    <h1> {user.name} </h1>
    <p> Gender: {user.gender}</p>
    <p> Age: {user.age}</p>
    <p> Location: {user.location}</p>
</div>
);

const templateTogether = (
    <div>
        <ol>
            <li> {templateOne} </li> 
            <li> {templateTwo} </li>   
        </ol>
    </div>

);

const templateAll = (
    <div>
        <ol>
            {templateDemo}
            {templateTogether}
              
        </ol>
        <p>{templateChallenge1}</p>
    {templateOne}
    {templateTwo}
    </div>

);

//CHALLENGE 2

// Create app object title/subtitle (kod mene tits)
// use title/subtitle in the template (kod mene templateChallenge2)
// render template

const tits = {
    title: 'Love App',
    subtitle: 'Decisionmaker'
}

const templateChallenge2 = (
<div>
    <h1>{tits.title}</h1>
    <p>{tits.subtitle}</p>
</div>
);

// Conditional Rendering in JSX, section part 12

//if statements
//ternary operators
//logical and operator

function getLocation(location) {
    if(location) {
        return <p>Common location: {location} </p>;
    } 
}

const templateThree = (
    <div>
        <h1> {user.name ? user.name : 'Anonymous'} </h1>
        <p>Family Name: {user.lastname}</p>
        {getLocation(user.commonlocation)}
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    </div>
);

//CHALLENGE 3 

//add an array of string options into the object of tits (create a new one - chall)
//only render the subtitle (and p tag) if subtitle exist - logical and operator
//render new p tag - if options.length > 0 "Heare are your options" "No options"

//*I have added additional text for options so it makes more sense and realistic

const chall = {
    titel: 'Love App',
    subtitel: 'Decisionmaker',
    options: []  // erased 'I love you', 'I hate you' options hard coded before
};

const templateConditional = (
<div>
    {chall.subtitel && <p> {chall.subtitel}</p>}
    <p> {(chall.options.length > 0) ? ('Here are your options : ' + chall.options[0] + ' OR ' + chall.options[1]): 'No options'} </p>
</div>

);

//CHALLENGE 4

//change all var type of variables into the const and let according to its scope in the code


const appRoot = document.getElementById('app');
//ReactDOM.render(templateConditional,appRoot);


// Forms and Inputs, section part 18

const onFormSubmit = (e) => {
    e.preventDefault();   //stop refresing the page after inputing text
    console.log('Form submitted!');

    const option = e.target.elements.option.value;

    if (option) {    //if there is some text typed in the form
        
        chall.options.push(option);  //if we type in "test" in the form option = test - push it to the object chall child "options"
        e.target.elements.option.value= []; //clearing the input form from typed text 
        
        renderOptionsCounter();
    }
};

//CHALLENGE 10

// Create "Remove All" button above list
// on click -> wipe the array -> rerender

const wipe = () => {
    chall.options= [];
    renderOptionsCounter();
};

//const numbers = [4, 7, 8, 9, 10, 11];

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * chall.options.length);  // generating random number between 0 and the length of array (that is how much we have inputed options by user) - index
    const pick = chall.options[randomNum]; //picking up the array value from the random chosen index 
    console.log(randomNum);
    console.log(pick);
    alert(pick);
};

const noInput = () => (chall.options.length > 0) ? false : true
    

const renderOptionsCounter = () => {

    const templateFormsInputs = (
        <div>
            <h1> {chall.titel}</h1>
            {chall.subtitel && <p> {chall.subtitel}</p>}
            <p>{(chall.options.length > 0) ? 'Here are your options : ' : 'No options'} </p>
            { 
                //<p>{chall.options.length}</p> 
            }
            <button disabled={noInput()} onClick={makeDecision}> Who do I love the most? </button>
            <button disabled={noInput()} onClick={wipe}> Remove All </button>
            {
               // numbers.map((x)=> {                  //section part 19 example
               //     return <p key={x}> Number: {x}  </p>
               // })

            }
            <ol>
                { /* <li>{chall.options[0]}</li>
                    <li>{chall.options[1]}</li> */ }

                {
                    //CHALLENGE 11

                    //map over my object string options getting back an array of list 
                    //set key and text

                }

                { 
                    chall.options.map((txt) => <li key={txt}> option: {txt}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button> Add new person </button>
            </form>
        </div>
        
        );
        
        ReactDOM.render(templateFormsInputs, appRoot);

    };
    renderOptionsCounter();
   

//CHALLENGE 9

//Create render functions that renders the new jsx
// Call it right away
// Call it after options array added to


//Arrays in JSX, section part 19

//changes in code  under the renderOptionsCounter section


//Picking an option, section part 20
//changes in code  under the renderOptionsCounter section