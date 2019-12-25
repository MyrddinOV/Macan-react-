import React from 'react';
import MainContainer from '../Containers/Containers'
import './hero.scss'
import SimpleSliderHero from '../slick-slider/SlickHero'
import { Element } from 'react-scroll'




function Hero() {

    return (
        <Element className='hero' name='top'>
            <MainContainer>
                <div className='hero-container' >
                    <div className='about'>
                        <p className='about__title'>Kalau Kita mau, Pasti ada Jalan</p>
                        <p className='about__text'>Semangat terus saudara-saudara!</p>
                        <button type='button' className='about__btn'>More</button>
                    </div>
                    <div className='slider'><SimpleSliderHero />
                    </div>
                </div>
            </MainContainer>
        </Element>
    )
}


export default Hero