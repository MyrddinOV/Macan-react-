import React from 'react';
import Header from '../header/Header'
import Hero from '../hero/Hero'
import Services from '../services/Services'
// import Portfolio from '../portfolio/Portfolio'
import PortfolioV2 from '../portfolio/PortfolioV2'
import Testimonial from '../testimonial/Testimonial'
import Map from '../map/Map'
import Contact from '../Contact/Contact'
import Footer from '../footer/Footer'

function MainPage() {
    return (
        <div className='wrapper'>
            <Header />
            <Hero />
            <Services />
            <PortfolioV2 />
            <Testimonial />
            <Map />
            <Contact />
            <Footer />
        </div>
    )
}

export default MainPage