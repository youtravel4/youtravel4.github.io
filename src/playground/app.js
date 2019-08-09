// Creating a React Component, section part 26

class InDecisionApp extends React.Component{
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            //options: props.options
            options: []
        };
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState (() => ({ options}) );   // identical to { options: options}, shorter
            } 
        } catch (e) {
            // Do nothing at all
        }
        
        
        
        //console.log('fetching data')


    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) { //saving only typed data, we don't want to save empty and not valid option
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);

            //console.log('saving data')
        }
    }

    componentWillUnmount() {
        console.log('component will unmount')
    }

    /* handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    } */

    //shorter snytax

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    } 

//Removing Indivudal Options, section part 43

//CHALLENGE 27

//convert all this.setState to shorter syntax



    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);  // generating random number between 0 and the length of array (that is how much we have inputed options by user) - index
        const pick = this.state.options[randomNum]; //picking up the array value from the random chosen index 
        alert(pick); 
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({ 
            options: prevState.options.filter((option) => optionToRemove !== option) 
        })); 
    }

    handleAddOption(option) {
        if (!option) {          // if option is not entered 
            return 'Enter valid option'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }

    //CHALLENGE 24

    // create a new method handlePick - pass down to Action and setup onClick - bind here
    // handlePick needs to randomly pick an option and alert it

    render() {
       
        const subtitle = 'Put your life in the hands of a computer.';
        
        return (
            <div>
                <Header  subtitle={subtitle} /> 
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                
                />  
                <Options 
                    options= {this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />

            </div>
        );

    }

}

/* InDecisionApp.defaultProps = {
    options: []
}
 */
const Header = (props) => {
    return (
        <div>
            <h1> {props.title}</h1>
            {props.subtitle && <h2> {props.subtitle} </h2>}
        </div>
    );
}

//Default Prop Value, section part 41

Header.defaultProps = {
    title: 'InDecision App'   
}

/* class Header extends React.Component {
    render() {
       // console.log(this.props);
        return (
            <div>
                <h1> {this.props.title}</h1>
                <h2> {this.props.subtitle} </h2>
            </div>
        );
    }
} */

const Action = (props) => {
    return (
        <div>
            <button 
            onClick={props.handlePick}
            disabled={!props.hasOptions}

            > 

            What should I do? 
            </button>
        </div>
    )
}

/* class Action extends React.Component {
    render() {
        return (
            <div>
                <button 
                onClick={this.props.handlePick}
                disabled={!this.props.hasOptions}

                > 

                What should I do? 
                </button>
            </div>
        )
    }
} */


// CHALLENGE 15

// create class Options -> render some static text 'options component here'
// AddOption component -> static text 'Addoption component here'

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}> Remove All </button>
            {props.options.length === 0 && <p> Please add an option to get started :) </p>}
            {
                //this.props.options.map( (txt) => <p key= {txt}> option: {txt} </p> ) 
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    )
}

/* class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}> Remove All </button>
                    {
                        //this.props.options.map( (txt) => <p key= {txt}> option: {txt} </p> ) 
                        this.props.options.map((option) => <Option key={option} optionText={option} />)
                    }
            </div>
        )
    }
}
 */

//CHALLENGE 16

//create a component Option -> add some static text Option component here
//render it inside Options component so the text shows between Options and AddOption

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                    }
                }

            > 
                Remove
            </button>
        </div>
    )
}


/* class Option extends React.Component{
    render() {
        return (
            <div>
            Option:
                {
                    this.props.optionText
                }
            </div>
        )
    } 
}*/

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();  //fetching the typed value, .trim() removes spaces if typed in and not alerting them
        const error = this.props.handleAddOption(option);
        
        this.setState(() => ({ error } ));     // equal to error: error, common writing in one line
        
        if (!error) {
            e.target.elements.option.value = '';
        } 

    }

    render() {
        return (
            <div>
                {this.state.error && <p> {this.state.error} </p>}
                <form onSubmit= {this.handleAddOption}>
                    <input type='text' name='option' />
                    <button> Add option</button>
                </form>
                
            </div>
        )
    }
}

//Stateless Functional Component, section part 40

//CHALLENGE 25

// convert Action, Options, Option and Header classes to functional components

/* const User = (props) => {
    return (
        <div>
            <p> Name: {props.name}</p>
            <p> Age: {props.age}</p>
        </div>
    )

    
}
 */

ReactDOM.render(<InDecisionApp />, document.getElementById('app'));
//ReactDOM.render(<User name="Hattica" age={22} />, document.getElementById('app'));


// C O M M E N T S 

// Nesting Components, section part 27

//const  obj = {
//  name: 'Prince Junior', 
//  getName() {
//      return this.name;
//  }
//
//
//const getName = obj.getName.bind({ name: 'Mirzino Jato'});
//
//console.log(getName());




//const jsx = (
//    <div>
//        <h1> Title </h1>
//        <Header /> 
//        <Action />
//        <Options />
//        <AddOption />
//    </div>
//);

//ReactDOM.render(jsx, document.getElementById('app'));





//Components Props, section part 28


//CHALLENGE 17

// Setup option prop for Options component , use created array 'options'
// Render the length of the array

//CHALLENGE 18

//Render new p tag for each option (set the text, set the key)



//Events&Methods, section part 29

//CHALLENGE 19

//Add Remove All button
//Setup handleRemoveAll -> alert some message
//Setup onClick to fire the method


//CHALLENGE 20
 
//Setup the form with text input and submit button
//Wire up onSubmit
//Setup handleAddOption method -> fetch the value typed, if value exists then alert


//Method Binding, section part 30


//InDecision State, section part 37

