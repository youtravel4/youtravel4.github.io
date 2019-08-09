import React from 'react';

const LetHimNow = (props) => (
    <div>
        <button 
            className="button button--lethimnow"
            onClick={props.handleShowHisOptions}
            disabled={!props.hasOptions}
        > 
           Let him now
        </button>
    </div>
);

export default LetHimNow; 
