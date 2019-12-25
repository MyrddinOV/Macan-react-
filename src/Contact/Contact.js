import React from 'react';
import MainContainer from '../Containers/Containers'
import Centering from '../Containers/Centering-container'
import Fade from 'react-reveal/Fade'
import ContactForm from '../ContactForm/ContactForm'
import { getScrollProps } from '../utils/scrollUtils'
import { Link, Element } from 'react-scroll'
import './Contact.scss'

class Contact extends React.Component {

  render() {
    return (
      <Element className='contact' name='contact'>
        <MainContainer>
          <Centering>
            <Fade top>
              <div className='contact-title'>
                <p className='contact-title--strong'>
                  <strong> Contact  </strong>

                </p>
                <p className='contact-title--info'>
                  Let's talk business, get in touch!
                            </p>
                <img className='contact-title--img' src="/img/separator-white.png" alt='separator' />
              </div>
            </Fade>
            <div className='contact-container'>

              <div className='contact-info'>
                <p className='contact-info--text'>
                  <strong> Office Hours</strong>
                </p>
                <p className='contact-info--text'>
                  Monday to Friday / 7:00 - 18:00 Saturday / 9:00 - 15:00
                            </p>
                <div className='contact-info--block'>
                  <img className='contact-info--block__location' src="/img/location.png" alt='location' />
                  <p className='contact-info--text'>
                    25 Silver Cost Avenue, MD 20910 Indonesia
                            </p>
                </div>

                <div className='contact-info--block'>
                  <img className='contact-info--block__phone' src="/img/phone.png" alt='phone' />
                  <p className='contact-info--text'>
                    (621) 555 6789
                            </p>
                </div>

                <div className='contact-info--block'>
                  <img className='contact-info--block__mail' src="/img/mail.png" alt='mail' />
                  <p className='contact-info--text'>
                    hello@macankumbang.net
                            </p>
                </div>
                <div className='contact-social'>
                  <a className='contact-social--link' href='/'><img className='contact-social--img' src="/img/twitter.png" alt='location' /></a>
                  <a className='contact-social--link' href='/'> <img className='contact-social--img' src="/img/fb.png" alt='location' /></a>
                  <a className='contact-social--link' href='/'><img className='contact-social--img' src="/img/google.png" alt='location' /></a>
                </div>

              </div>
              <ContactForm />

            </div>

            <div className='go-top--container'>
              <Link  {...getScrollProps({
                to: 'top'
              })}  >
                <img className='go-top--img' src="/img/go-top.png" alt='go-top' />
              </Link>
            </div>

          </Centering>
        </MainContainer>
      </Element>
    )
  }
}

export default Contact