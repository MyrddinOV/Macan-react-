import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slick-testimonial.scss'

class SimpleSliderTestimonial extends React.Component {
    render() {
        let settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 600,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnDotsHover: true,
        };
        return (
            <Slider {...settings}>
                <div className='slider-container'>
                    <div className='slider-photo' />

                    <div className='slider-text'>
                        <p className='slider-text--quote'>
                            This is Photoshop's version  of Lorem Ipsum.
                           Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                           lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh
                           id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                        </p>
                        <p className='slider-text--person'>
                            John Doe
                        </p>
                    </div>
                </div>

                <div className='slider-container'>
                    <div className='slider-photo' />

                    <div className='slider-text'>
                        <p className='slider-text--quote'>
                            This is Photoshop's version  of Lorem Ipsum.
                           Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin.
                           
                        </p>
                        <p className='slider-text--person'>
                            John Doe
                        </p>
                    </div>
                </div>

                <div className='slider-container'>
                    <div className='slider-photo' />

                    <div className='slider-text'>
                        <p className='slider-text--quote'>
                            This is Photoshop's version  of Lorem Ipsum.
                           Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                           lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh
                           id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                           lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh
                           id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                        </p>
                        <p className='slider-text--person'>
                            John Doe
                        </p>
                    </div>
                </div>

                <div className='slider-container'>
                    <div className='slider-photo' />

                    <div className='slider-text'>
                        <p className='slider-text--quote'>
                            This is Photoshop's version  of Lorem Ipsum.
                           Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                           lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh
                           id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                           lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh
                           id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                           lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh
                           id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                          
                        </p>
                        <p className='slider-text--person'>
                            John Doe
                        </p>
                    </div>
                </div>


            </Slider>
        );
    }
}
export default SimpleSliderTestimonial