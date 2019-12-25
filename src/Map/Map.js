import React from 'react';

import './Map.scss'

function Map() {
    return (
        <div className='map-container'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2366
            .65565942008!2d122.52448577047673!3d-3.9741427637947737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13
            .1!3m3!1m2!1s0x2d98f3d2cdb0b379%3A0xf97f96ddff3e24c5!2sRENTAL%20MOBIL%20HAIDAR
            !5e0!3m2!1sru!2sua!4v1576750244312!5m2!1sru!2sua"
              frameBorder="0"  allowFullScreen="" title='map'>
                 
             </iframe>
        </div>
    )
}

export default Map