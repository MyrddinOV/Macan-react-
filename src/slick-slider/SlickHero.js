import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../hero/hero.scss'

class SimpleSliderHero extends React.Component {
    render() {
        let settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 700,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnDotsHover: true,
        };
        return (
            <Slider {...settings}>
                <div className='slid-container'>
                    <img src="/img/first-slide.jpg" alt='first-slide' />
                </div>
                <div className='slid-container'>
                    <img src="/img/second-slide.png" alt='second-slide'/>
                </div>
                <div className='slid-container'>
                    <img src="/img/third-slide.png" alt='third-slide'/>
                </div >
                <div className='slid-container'>
                    <img src="/img/forth-slide.png" alt='forth-slide'/>
                </div>
                <div className='slid-container'>
                    <img src="/img/fifth-slide.png" alt='fifth-slide'/>
                </div>
                <div className='slid-container'>
                    <img src="/img/third-slide.png" alt='sixth-slide'/>
                </div>
            </Slider>
        );
    }
}
export default SimpleSliderHero