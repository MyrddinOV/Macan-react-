import React from 'react';
import MainContainer from '../Containers/Containers'
import Centering from '../Containers/Centering-container'
import Tiles from './Tiles'
import Fade from 'react-reveal/Fade'
import 'src/Portfolio/Portfolio.scss'
import 'src/Portfolio/Tiles.scss'


class Portfolio extends React.Component {
    handleClickWeb() {
        const showWeb = document.getElementsByClassName('web');
        const hidePrint = document.getElementsByClassName('print');

        for (let i = 0; i < showWeb.length; i++) {
            showWeb[i].style.display = 'flex '
        }

        for (let i = 0; i < hidePrint.length; i++) {
            hidePrint[i].style.display = 'none'
        }
    }

    handleClickPrint() {
        const hideWeb = document.getElementsByClassName('web');
        const showPrint = document.getElementsByClassName('print');

        for (let i = 0; i < hideWeb.length; i++) {
            hideWeb[i].style.display = 'none '
        }

        for (let i = 0; i < showPrint.length; i++) {
            showPrint[i].style.display = 'flex'
        }
    }

    handleClickAll() {
        const showWeb = document.getElementsByClassName('web');
        const showPrint = document.getElementsByClassName('print');

        for (let i = 0; i < showWeb.length; i++) {
            showWeb[i].style.display = 'flex '
        }

        for (let i = 0; i < showPrint.length; i++) {
            showPrint[i].style.display = 'flex'
        }
    }

    handleClickShapeMore() {
        const showMore = document.getElementsByClassName('hide');
        const hideShape = document.getElementById('show');
        const showShape = document.getElementById('hide')

        for (let i = 0; i < showMore.length; i++) {
            showMore[i].style.display = 'flex '
        }

        hideShape.style.display = 'none';
        showShape.style.display = 'flex'
    }

    handleClickShapeLess() {
        const showLess = document.getElementsByClassName('hide');
        const showShape = document.getElementById('show');
        const hideShape = document.getElementById('hide')

        for (let i = 0; i < showLess.length; i++) {
            showLess[i].style.display = 'none '
        }

        showShape.style.display = 'flex';
        hideShape.style.display = 'none'
        
    }

    render() {
        return (
            <div className='portfolio' >
                <MainContainer>
                    <Centering>
                        <Fade top>
                            <div className='portfolio-title'>
                                <p className='portfolio-title--strong'>
                                    <strong> Portfolio</strong>
                                </p>
                                <p className='portfolio-title--info'>
                                    our awesome works
                            </p>
                                <img className='portfolio-title--img' src="/img/separator-black.png" alt='separator' />
                                <div className='portfolio-title--handle'>
                                    <span className='portfolio-title--handle_all portfolio-title--handle_link' onClick={this.handleClickAll}>All</span>
                                    <span className='portfolio-title--handle_separator'> / </span>
                                    <span className='portfolio-title--handle_web portfolio-title--handle_link' onClick={this.handleClickWeb}>Web</span>
                                    <span className='portfolio-title--handle_separator'> / </span>
                                    <span className='portfolio-title--handle_print portfolio-title--handle_link' onClick={this.handleClickPrint}>Print</span>
                                </div>
                            </div>
                        </Fade>
                        <Tiles />

                        <div className='portfolio-shape' id='show'>
                            <p className='portfolio-shape--text'>
                                Browse All
                            </p>
                            <div className='portfolio-shape--shape_container'>
                                <img className='portfolio-shape--shape_img' src="/img/shape.png" alt='shape' onClick={this.handleClickShapeMore} />
                            </div>
                        </div>

                        <div className='portfolio-shape hide-shape' id='hide'>
                            <p className='portfolio-shape--text'>
                                Hide
                            </p>
                            <div className='portfolio-shape--shape_container'>
                                <img className='portfolio-shape--shape_img' src="/img/shape-less.png" alt='shape' onClick={this.handleClickShapeLess} />
                            </div>
                        </div>



                    </Centering>
                </MainContainer>
            </div>
        )
    }
}

export default Portfolio