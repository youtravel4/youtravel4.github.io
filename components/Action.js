import React from 'react';

const Action = (props) => (
    <div>
        <button 
            className="big-button"
            onClick={props.handlePick}
            disabled={!props.hasOptions}
        > 
          Where Do We Travel ?
       </button>
    </div>
);

export default Action; 

