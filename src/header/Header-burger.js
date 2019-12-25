import React from 'react'
import MainContainer from '../Containers/containers'
import '../containersSCSS/header-burger.scss'
import '../containersSCSS/header.scss'




// class HeaderBurgerMenu extends React.Component {
//     constructor(props) {
//         super(props);
//         this.burgerRef = React.createRef();
//     }
//     handleClick() {
//         const burgerMenu = this.burgerRef.current;
//         burgerMenu.classList.toggle('is-nav-open')
//     }


//     render() {
//         return (

//             <div className='burger-container'>

//                 <div className='header-burger'>


//                     <div ref={this.burgerRef} className='burgerMenu' >
//                         <ul className='nav-list--burger'>
//                             <li className='nav-list_item--burger'>
//                                 <a className='nav-list_link--burger' href='#'>Home</a>
//                             </li>

//                             <li className='nav-list_item--burger'>
//                                 <a className='nav-list_link--burger' href='#'>Services</a>
//                             </li>

//                             <li className='nav-list_item--burger'>
//                                 <a className='nav-list_link--burger' href='#'>Work</a>
//                             </li>

//                             <li className='nav-list_item--burger'>
//                                 <a className='nav-list_link--burger' href='#'>Testimonials</a>
//                             </li>

//                             <li className='nav-list_item--burger'>
//                                 <a className='nav-list_link--burger' href='#'>Contact</a>
//                             </li>
//                         </ul>


//                     </div>

//                 </div>

//             </div>


//         )
//     }
// }




export default HeaderBurgerMenu