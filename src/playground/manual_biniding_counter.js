//CHALLENGE 26

//allow counter to take count prop, if that prop exists we use it to pass in
//if it doesn't exist setup prop value to 0



//CHALLENGE 28

// set up a lifecylce methods, use localStorage to save and load count 
//should work and remember states after refresh

class Counter extends React.Component {   
    constructor (props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            //count: props.count
            count: 100
        };
    }
    
    componentDidMount() {

        const num = localStorage.getItem('count'); //num is now STRING when fetched from local storage
        const count = parseInt(num, 10);

        
        if (!isNaN(count)) {        //checking is it a type number
            this.setState (() => ({ count}) );   // identical to { options: options}, shorter
        }  
    }
mm
    componentDidUpdate(prevProps, prevState) {
        
        if(prevState.count !== this.state.count){
            const num = this.state.count
            localStorage.setItem('count', num) //now it saves num as a STRING in local storage
        }

    }

    handleAddOne() {
        this.setState((prevState)=> {
           return { 
               count: prevState.count +1
            }; 
        });

       // console.log('Add One Method')  
    }


//CHALLENGE 22

//Create dynamic changer for minus one handler and reset handler

    handleMinusOne() {
        this.setState((prevState)=> {
            return {
                count: prevState.count -1
            };
        });

        //console.log('Minus One Method');
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });

        //console.log('Reset Method');
    }
    render() {
        return (
            <div>
                <h1> Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

/* Counter.defaultProps = {
    count: 0
} */

ReactDOM.render(<Counter /> , document.getElementById('app'));

//CHALLENGE 21

//Create three methods: handleAddOne, handleMinusOne, handleReset
//Use console.log to print method name
//wire up onClick and bind in the contructor



/* //Events and attributes, section part 16

//adding two buttons for user interaction (plus and minus) and numbers counting on the screen

let count = 0; // we are going to change it later on so we use let
//const someId = 'myidhere';

const addOne = () => {
    counter++;
    console.log('addOne');
    renderCounterApp();
};

const templateSixteen = (
    <div>
        <h1> Count: {count}</h1>
        <button onClick={addOne} > +1 </button>
    </div>
);
console.log(templateSixteen);


//CHALLENGE 7

// create two new buttons and two new functions that fire for each of those buttons
// first button "-1" - setup minusOne function and register - log "minusOne" every single time the button is clicked
// second button "reset" - setup reset function - log "reset" on every click

let counter = 0;

const minusOne = () => {
    counter--;   
    console.log('minus one');
    renderCounterApp();
};

const reset = () => {
    counter = 0;   
    console.log('reset');
    renderCounterApp();

;}


const appRoot = document.getElementById('app');


// Manual data binding, section part 17

// making counter works!!

const renderCounterApp = () => {
    const Challenge7 = (
        <div>
            <h1> I love my Princess: {counter}</h1>
            <button onClick={addOne} > More </button>
            <button onClick={minusOne} > Less </button>
            <button onClick={reset} > Reset </button>
        </div>
    );

    ReactDOM.render(Challenge7,appRoot);
};

renderCounterApp(); 
 */