import React from 'react';
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import Services from '../Services/Services'
// import Portfolio from '../Portfolio/Portfolio'
import PortfolioV2 from '../Portfolio/PortfolioV2'
import Testimonial from '../Testimonial/Testimonial'
import Map from '../Map/Map'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

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