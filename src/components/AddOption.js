import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };

    handleAddOption = (e) => {
        e.preventDefault();
        
        const option = e.target.elements.option.value.trim();   //fetching the typed value, .trim() removes spaces if typed in and not alerting them
        const error = this.props.handleAddOption(option, this.props.optionsIndex);
        
        this.setState(() => ({ error } ));     // equals to error: error, common writing in one line
        
        if (!error) {
            e.target.elements.option.value = '';
        } 
    }

    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error"> {this.state.error} </p>}
                <form className="add-option" onSubmit= {this.handleAddOption}>
                    <input className="add-option__input" type='text' name='option' />
                    <button className="button"> Add Option</button>
                </form>         
            </div>
        )
    }
}