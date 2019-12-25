import React from 'react';
import MainContainer from '../Containers/Containers'
import Centering from '../Containers/Centering-container'
import Tiles from './Tiles'
import Fade from 'react-reveal/Fade'
import { scroller, Element } from 'react-scroll'

import './portfolio.scss'
import './tiles.scss'

const mockTileList = [
    {
        title: 'Macankumbang Web',
        text: `his is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel
        velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
        nisi elit consequat ipsum, nec sagittis`,
        href: '/',
        type: 'web',
        id: 0,
    },
    {
        title: 'Macankumbang Print',
        text: `his is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel
        velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
        nisi elit consequat ipsum, nec sagittis`,
        href: '/',
        type: 'print',
        id: 1,
    },
    {
        title: 'Macankumbang Web',
        text: `his is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel
        velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
        nisi elit consequat ipsum, nec sagittis`,
        href: '/',
        type: 'web',
        id: 2,
    },
    {
        title: 'Macankumbang Web',
        text: `his is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel
        velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
        nisi elit consequat ipsum, nec sagittis`,
        href: '/',
        type: 'web',
        id: 3,
    },
    {
        title: 'Macankumbang Print',
        text: `his is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel
        velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
        nisi elit consequat ipsum, nec sagittis`,
        href: '/',
        type: 'print',
        id: 4,
    },
    {
        title: 'Macankumbang Web',
        text: `his is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel
        velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
        nisi elit consequat ipsum, nec sagittis`,
        href: '/',
        type: 'web',
        id: 5,
    },
    {
        title: 'Macankumbang Web',
        text: `his is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel
        velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
        nisi elit consequat ipsum, nec sagittis`,
        href: '/',
        type: 'web',
        id: 6,
    },
    {
        title: 'Macankumbang Print',
        text: `his is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel
        velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
        nisi elit consequat ipsum, nec sagittis`,
        href: '/',
        type: 'print',
        id: 7,
    },
    {
        title: 'Macankumbang Web',
        text: `his is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel
        velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
        nisi elit consequat ipsum, nec sagittis`,
        href: '/',
        type: 'web',
        id: 8,
    },
    {
        title: 'Macankumbang Web',
        text: `his is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel
        velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
        nisi elit consequat ipsum, nec sagittis`,
        href: '/',
        type: 'web',
        id: 9,
    },
    {
        title: 'Macankumbang Print',
        text: `his is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel
        velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
        nisi elit consequat ipsum, nec sagittis`,
        href: '/',
        type: 'print',
        id: 10,
    },
    {
        title: 'Macankumbang Web',
        text: `his is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel
        velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
        nisi elit consequat ipsum, nec sagittis`,
        href: '/',
        type: 'web',
        id: 11,
    },

]

class PortfolioV2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            renderList: [],
            responseList: [],
            isShowAll: false,
        }
        this.onAllClick = this.onAllClick.bind(this)
        this.onWebClick = this.onWebClick.bind(this)
        this.onPrintClick = this.onPrintClick.bind(this)
        this.toggleShowAll = this.toggleShowAll.bind(this)

    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                renderList: mockTileList,
                responseList: mockTileList,
            })
        }, 500)
    }

    onAllClick() {
        this.setState({
            ...this.state,
            renderList: this.state.responseList,
        })
    }

    onWebClick() {
        const newList = this.state.responseList.filter(elem => elem.type === 'web')
        this.setState({
            ...this.state,
            renderList: newList,
        })
    }

    onPrintClick() {
        const newList = this.state.responseList.filter(elem => elem.type === 'print')
        this.setState({
            ...this.state,
            renderList: newList,
        })
    }

    toggleShowAll() {
        this.setState((prevState) => {
            const isShowAll = !prevState.isShowAll;
            if (!isShowAll) {
                scroller.scrollTo('tilesTop', {
                    offset: -100,
                })
            }
            return {
                ...prevState,
                isShowAll,
            }
        })
    }

    render() {
        return (
            <Element className='portfolio' name='portholio' >
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
                                    <span className='portfolio-title--handle_all portfolio-title--handle_link' onClick={this.onAllClick} >All</span>
                                    <span className='portfolio-title--handle_separator'> / </span>
                                    <span className='portfolio-title--handle_web portfolio-title--handle_link' onClick={this.onWebClick}>Web</span>
                                    <span className='portfolio-title--handle_separator'> / </span>
                                    <span className='portfolio-title--handle_print portfolio-title--handle_link' onClick={this.onPrintClick}>Print</span>
                                </div>
                            </div>
                        </Fade>
                        <Tiles list={this.state.renderList} isShowAll={this.state.isShowAll} />

                        <div className='portfolio-shape' onClick={this.toggleShowAll}>
                            <p className='portfolio-shape--text'>
                                {this.state.isShowAll ? 'Hide' : "Browse All"}
                            </p>
                            <div className='portfolio-shape--shape_container'>
                                <img className='portfolio-shape--shape_img' src={`/img/${this.state.isShowAll ? 'shape-less' : "shape"}.png`} alt='shape' />
                            </div>
                        </div>





                    </Centering>
                </MainContainer>
            </Element>
        )
    }
}

export default PortfolioV2