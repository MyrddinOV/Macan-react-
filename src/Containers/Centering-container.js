import React from 'react';
import './centering-container.scss'

function Centering(props) {
    return (
        <div className='centering'>
            {props.children}
        </div>
    )
}

export default Centering