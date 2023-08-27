import React from 'react'
import code from '../Assets/pexels-markus-spiske-113850.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnkh, faDownload } from '@fortawesome/free-solid-svg-icons'

function About() {
    return (
        <div id='about' className='about about__container'>
            <div className='about__me'>
                <img src={code} alt='code' />
                <div>
                    <p>About Me</p>
                    <h2>I'm a Front-End Developer based in Egypt <FontAwesomeIcon icon={faAnkh} className='about__me__icon' /> </h2>
                    <p>My name is Kareem Fayed, I'm a CS student at Kafr El-Sheikh University and I'm experienced with HTML, CSS, JavaScript,
                    Bootstrap, Tailwind, SCSS, BEM and of Course React, I'm always learning and ready for new Challenges. </p>
                    <button>Download My Resume <FontAwesomeIcon icon={faDownload} /> </button>
                </div>
            </div>
        </div>
    )
}

export default About