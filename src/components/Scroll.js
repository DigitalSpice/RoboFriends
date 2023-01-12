import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll',
                        border:'3px solid #2200aa79',
                        height: '600px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;