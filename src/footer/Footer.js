import React from 'react';
import MainContainer from '../Containers/Containers'

import './footer.scss'


function Footer() {
    return (
        <div className='footer'>
            <MainContainer>

                <div className='middle'>
                    <div className='footer-title'>
                        <p className='footer-title--copyright'>
                            (c) copyright 2013 macankumbang
    
                        </p>
                        <p className='footer-title--label'>
                            <strong>Macan</strong>kumbang
                         </p>

                    </div>
                </div>

            </MainContainer>
        </div>
    )
}

export default Footer