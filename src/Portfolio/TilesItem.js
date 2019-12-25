import React from 'react'

import './Tiles.scss'

const TilesItem = ({ title, text, href = '/' }) => {

    return (
       
            <div className='portfolio-content__container print'>
                <a className='portfolio-content__link' href={href}>
                    <div className='portfolio-content__block'>
                        <p className='portfolio-content__title-text'>
                            {title}
                        </p>
                        <p className='portfolio-content__info-text'>
                            {text}
                        </p>
                    </div>
                </a>
            </div>
        
    )
}

export default TilesItem;
