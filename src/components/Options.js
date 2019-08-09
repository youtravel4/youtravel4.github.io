import React from 'react'
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title"> {props.title} </h3>
                <button 
                    onClick= { () => props.handleDeleteOptions(props.optionsIndex)}
                    className="button button--removeAll"
                > 
                    Remove All
                </button>
            </div>
            {props.options.length === 0 && <p className="widget__message"> {props.message} </p>}
            {
                props.options.map((option, index) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOption={() => props.handleDeleteOption(option, props.optionsIndex)}
                        count={index + 1}
                    />
                ))
            }      
        </div>
    )
};

export default Options;