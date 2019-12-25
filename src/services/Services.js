import React from 'react';
import MainContainer from '../Containers/Containers'
import Centering from '../Containers/Centering-container'
import Fade from 'react-reveal/Fade'
import { Element } from 'react-scroll'
import './services.scss'
import iconLike from '../icons/like.svg'
import iconWorld from '../icons/world.svg'
import iconDesktop from '../icons/desktop.svg'
import iconRocket from '../icons/rocket.svg'

function Services() {
    return (
        <Element className='services' name='services'>
            <MainContainer>
                <Centering>
                    <Fade top>
                        <div className='services-title'>
                            <p className='services-title--strong'>
                                <strong> Our Services</strong>
                            </p>
                            <p className='services-title--info'>
                                our awesome services
                            </p>
                            <img className='services-title--img' src="/img/separator-white.png" alt='separator' />
                        </div>
                    </Fade>
                    <div className='services-content'>
                        <Fade left>
                            <div className='services-content__block'>
                                <img className='services-content__block--img' src={iconLike} alt='service-1' />
                                
                                <p className='services-content__block--title'>
                                    Beautiful Design
                            </p>
                                <p className='services-content__block--info'>
                                    This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                            </p>

                                <button className='services-content__block--btn'>More</button>

                            </div>
                        </Fade>

                        <Fade left>
                            <div className='services-content__block'>
                                <img className='services-content__block--img' src={iconWorld} alt='service-2' />
                                <p className='services-content__block--title'>
                                    Global Trend
                            </p>
                                <p className='services-content__block--info'>
                                    This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                            </p>

                                <button className='services-content__block--btn'>More</button>

                            </div>
                        </Fade>

                        <Fade right>
                            <div className='services-content__block'>
                                <img className='services-content__block--img' src={iconDesktop} alt='service-3' />
                                <p className='services-content__block--title'>
                                    Responsive
                            </p>
                                <p className='services-content__block--info'>
                                    This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                            </p>

                                <button className='services-content__block--btn'>More</button>

                            </div>
                        </Fade>

                        <Fade right>
                            <div className='services-content__block'>
                                <img className='services-content__block--img' src={iconRocket} alt='service-4' />
                                <p className='services-content__block--title'>
                                    Awesome Design
                            </p>
                                <p className='services-content__block--info'>
                                    This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                            </p>

                                <button type='button' className='services-content__block--btn'>More</button>

                            </div>
                        </Fade>
                    </div>

                </Centering>
            </MainContainer>
        </Element>
    )
}

export default Services