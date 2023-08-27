import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Contact() {
    return (
        <div id='contact' className='contact'>
            <div className='contact__content'>
                <p>Get in touch</p>
                <div className='contact__contentInfo'>
                    <h2>Contact me</h2>
                    <div>
                        <span> <FontAwesomeIcon icon={faEnvelope} /> kareemf910zuku@gmail.com</span>
                        <span> <FontAwesomeIcon icon={faLinkedin} />  <a target="_blank" href='https://www.linkedin.com/in/kareem-fayed-281224223/'>Kareem Fayed</a> </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact