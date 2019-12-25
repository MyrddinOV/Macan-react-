import React from 'react';
import { Element } from 'react-scroll'
import TilesItem from './TilesItem'
import './Tiles.scss'

const MAX_SHOW = 6;

class Tiles extends React.Component {
    

    render() {
        const {list, isShowAll} = this.props
        return (
                
            <Element name='tilesTop' className='portfolio-content'>
                {
                    list.map((item, index) => {
                        if (index + 1 > MAX_SHOW && !isShowAll ) {
                            return null;
                        } 
                        return  <TilesItem key={item.id} title={item.title} text={item.text} href={item.href} />
                    })
                }
                

            </Element>

        )
    }
}

export default Tiles