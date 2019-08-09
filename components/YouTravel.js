import React from 'react';

import AddOption from './AddOption'; //it can be without .js extension, webpack will automatically search for it
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';
import Footer from './Footer';
import LetHimNow from './LetHimNow';

export default class YouTravel extends React.Component{
    state = {
        optionsList: [[]],
        hasOptions: undefined,
        alloptions: [],
        selectedOption: undefined,
        clicked: undefined

    };

    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }) )
    } 

    handleDeleteOptions = (optionIndex) => {
        this.setState((prevState) => {
            const newOptions = prevState.optionsList;
            newOptions[optionIndex] = []; 
            return {optionsList : newOptions, hasOptions: this.hasOptions(newOptions) } 
        });
    };

    handlePick = () => {
        let alloptions = [];
        for ( let i=0; i < this.state.optionsList.length; i++ ) {
            alloptions = this.state.optionsList[i].concat(alloptions)
        } // zamijeni sve for sa map

        this.setState({ alloptions });
        
        const randomNum = Math.floor(Math.random() * alloptions.length);  // generating random number between 0 and the length of array (that is how much we have inputed options by user) - index
        const option = alloptions[randomNum];                            //picking up the array value from the random chosen index 
        
        this.setState(() => ({
            selectedOption: option
        }));
    };

    handleDeleteOption = (optionToRemove, optionsIndex) => {
        this.setState((prevState) => { 
             const newOption = prevState.optionsList;
             newOption[optionsIndex] = newOption[optionsIndex].filter((option) => optionToRemove !== option);
             return { optionsList: newOption, hasOptions: this.hasOptions(newOption) }
        }); 
    };

    handleAddOption = (option, optionsIndex) => {
        if (!option) {          // if option is not entered 
            return 'Enter valid destination to add it to the list.'
        } else if (this.state.optionsList[optionsIndex].indexOf(option)> -1) {
            return 'This option already exists. Enter a new destination.'
        }
        this.setState((prevState) => { 
            const newOptionsList = prevState.optionsList;
            newOptionsList[optionsIndex] = newOptionsList[optionsIndex].concat(option);
            return {optionsList: newOptionsList, hasOptions: true } 
         })
    };

    handleShowHisOptions = () => {
        this.setState((prevState) => { 
            const newOptionsList = prevState.optionsList;
            newOptionsList.push([]);                          // add (push) a new empty list (array) into the list of lists (optionsList)
            return {
                clicked: !undefined,
                optionsList: newOptionsList
             }
        })
    }

    componentDidUpdate = (prevProps, prevState) => {
        const json = JSON.stringify(this.state.optionsList);
        localStorage.setItem('optionsList', json);
    };

    hasOptions = (optionsList) => {
        for ( let i=0; i< optionsList.length; i++ ) {
            if (optionsList[i].length > 0) {
                return true;
            }
        }
        return false;
    }
    
    componentDidMount = () => {
        try {
            console.log("mounting")
            const json = localStorage.getItem('optionsList');
            if (json != null) {
                const optionsList = JSON.parse(json);
                    this.setState ( () => ({ hasOptions: this.hasOptions(optionsList)}))              
            if (optionsList) {
                    this.setState (() => ({ optionsList }) );   // identical to { options: options}, shorter
                } 
            }  
        } catch (e) {
            // Do nothing at all
        }
    };

    componentWillUnmount= () => {
        console.log('component will unmount')
    };

    render() {
       
        const subtitle = 'Stop arguing. Professor Mirza decides.';
        
        return (
            <div>
                <Header  subtitle={subtitle} /> 
                <div className="container">
                    <Action 
                        hasOptions={this.state.hasOptions}
                        handlePick={this.handlePick}
                    /> 
                    <div className="widget"
                    >
                        <Options 
                            title={'Her Destinations'}
                            message={'Let your princess enters her desired destinations first :)'}
                            options={this.state.optionsList[0]}
                            optionsIndex={0}
                            handleDeleteOptions={() => this.handleDeleteOptions(0)}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption 
                            optionsIndex={0}
                            handleAddOption={this.handleAddOption}
                        />
                    </div> 
                    <LetHimNow 
                        hasOptions={this.state.optionsList[0].length > 0}
                        handleShowHisOptions={this.handleShowHisOptions}
                    />
                    {this.state.clicked ?  <div className="widget">
                                                <Options 
                                                    title={'His Destinations'}
                                                    message={'You are lucky guy - she has actually let you to have your own preferences. Be grateful and enter them before she changes her mind :) '}
                                                    options={this.state.optionsList[1]}
                                                    optionsIndex={1}
                                                    handleDeleteOptions={() => this.handleDeleteOptions(1)}
                                                    handleDeleteOption={this.handleDeleteOption}
                                                />
                                                <AddOption 
                                                    optionsIndex={1}
                                                    handleAddOption={this.handleAddOption}
                                                />
                                            </div> : null}  
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                /> 
                <Footer />
            </div>
        );

    };
};
