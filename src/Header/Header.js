import React from 'react'
import MainContainer from '../Containers/Containers'
import { Link } from 'react-scroll'
import './HeaderBurger.scss'
import './Header.scss'

import { getScrollProps } from '../utils/scrollUtils'



class Header extends React.Component {
    state = { isActive: false };

    wrapper = React.createRef();

    componentWillUnmount() {
        this.removeOutsideClickListener();
    }

    addOutsideClickListener() {
        document.addEventListener('click', this.handleDocumentClick);
        document.getElementById('menu').classList.add('is-nav-open')
    }

    removeOutsideClickListener() {
        document.removeEventListener('click', this.handleDocumentClick)
        document.getElementById('menu').classList.remove('is-nav-open')
    }

    onShow() {
        this.addOutsideClickListener();
    }

    onHide() {
        this.removeOutsideClickListener();
    }

    onClickOutside() {
        this.setState({ isActive: false });
        document.getElementById('menu').classList.remove('is-nav-open')
    }

    handleDocumentClick = event => {
        if (this.wrapper.current && !this.wrapper.current.contains(event.target)) {
            this.onClickOutside();
        }
    };

    toggleMenu = () => {
        this.setState(
            prevState => ({ isActive: !prevState.isActive }),
            () => {
                this.state.isActive ? this.onShow() : this.onHide();
            }
        )
    }


    render() {

        const { isActive } = this.state;
        return (

            <header >
                <MainContainer >
                    <div className='header-container'>
                        <div className='label'>
                            <strong>Macan</strong>kumbang
                    </div>
                        <div className='menu' ref={this.wrapper} onClick={this.toggleMenu}>
                            <span />
                        </div>

                        <nav>
                            <ul className='nav-list' id='home'>
                                <li className='nav-list_item' >
                                <Link className='nav-list_link' {...getScrollProps({
                                        to: 'top'
                                    })} >Home</Link>
                                </li>

                                <li className='nav-list_item'>
                                    <Link className='nav-list_link' {...getScrollProps({
                                        to: 'services'
                                    })} >Services</Link>
                                </li>

                                <li className='nav-list_item'>
                                    <Link className='nav-list_link' {...getScrollProps({
                                        to: 'portholio'
                                    })}>Work</Link>
                                </li>

                                <li className='nav-list_item'>
                                <Link className='nav-list_link' {...getScrollProps({
                                        to: 'testimonial'
                                    })}>Testimonial</Link>
                                </li>

                                <li className='nav-list_item'>
                                <Link className='nav-list_link' {...getScrollProps({
                                        to: 'contact'
                                    })}>Contact</Link>
                                </li>
                            </ul>
                        </nav>


                        <div className='burger-menu' id='menu'>
                            {isActive && (
                                <ul className='nav-list--burger'>
                                    <li className='nav-list_item--burger'>
                                        <a className='nav-list_link--burger' href='/'>Home</a>
                                    </li>

                                    <li className='nav-list_item--burger'>
                                        <a className='nav-list_link--burger' href='/'>Services</a>
                                    </li>

                                    <li className='nav-list_item--burger'>
                                        <a className='nav-list_link--burger' href='/'>Work</a>
                                    </li>

                                    <li className='nav-list_item--burger'>
                                        <a className='nav-list_link--burger' href='/'>Testimonials</a>
                                    </li>

                                    <li className='nav-list_item--burger'>
                                        <a className='nav-list_link--burger' href='/'>Contact</a>
                                    </li>
                                </ul>
                            )}
                        </div>


                    </div >
                </MainContainer>
            </header>

        )
    }

}




export default Header