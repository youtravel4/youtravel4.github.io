import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        onRequestClose={props.handleClearSelectedOption}  //closes modal box if we click outside the box (on the background)
        closeTimeoutMS={500} 
        className="modal" 
    >
        <h3 className="modal__title"> Professor Mirza picked up this destination for you </h3>
            {props.selectedOption && <p className="modal__body">{props.selectedOption} </p>}
        <h3 className="modal__subtitle"> Enjoy!! Have a nice trip :)  </h3>
        <button className="button button--modal" onClick={props.handleClearSelectedOption}> Okay </button>
    </Modal>
);

export default OptionModal; 
