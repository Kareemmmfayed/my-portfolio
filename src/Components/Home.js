import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import me from '../Assets/me.jpg'
import html from '../Assets/html.png'
import css from '../Assets/css.png'
import scss from '../Assets/scss.png'
import boot from '../Assets/bootstrap-logo-vector.svg'
import react from '../Assets/react.png'
import javascript from '../Assets/JavaScript.png'

function Home() {

    return (
        <div className='home container'>
            <div className='home__me'>
                <div className='home__me__info'>
                    <h1> Front-End <br/> React Developer <FontAwesomeIcon icon={faPalette} className='home__me__infoIcon'/> </h1>
                    <p>My name is Kareem, I like to build websites with React.</p>
                    <div className='home__me__infoCont'>
                        <a target="_blank" href='https://www.linkedin.com/in/kareem-fayed-281224223/'>
                            <FontAwesomeIcon icon={faLinkedin} className='home__me__infoLink blue' /> 
                        </a>
                        <a target="_blank" href='https://github.com/Kareemmmfayed'>
                            <FontAwesomeIcon icon={faGithub} className='home__me__infoLink grey' />
                        </a>
                    </div>
                </div>
                <div className='home__me__image'>
                    <img src={me} alt='Kareem'/>
                </div>
            </div>
            <ul className='home__stack'>
                <li> <img src={html} alt=''/> </li>
                <li> <img src={css} alt=''/> </li>
                <li> <img src={scss} alt=''/> </li>
                <li> <img src={javascript} alt=''/> </li>
                <li> <img src={react} alt=''/> </li>
                <li> <img src={boot} alt=''/> </li>
            </ul>
        </div>
    )
}

export default Home