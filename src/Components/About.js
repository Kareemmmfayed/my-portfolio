import React from 'react'
import code from '../Assets/pexels-markus-spiske-113850.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnkh } from '@fortawesome/free-solid-svg-icons'

function About() {
    return (
        <div className='about about__container'>
            <div className='about__me'>
                <div className='about__me__img'>
                    <img src={code} alt='code' className='about__me__img'/>
                </div>
                <div>
                    <p>About Me</p>
                    <h2>I'm a Front-End Developer based in Egypt <FontAwesomeIcon icon={faAnkh} /> </h2>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default About