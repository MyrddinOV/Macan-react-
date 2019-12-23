import React from 'react';
import './main-container.scss'

function MainContainer(props) {
    return (
        <div className='main-container'>
            {props.children}
        </div>
    )
}

export default MainContainer