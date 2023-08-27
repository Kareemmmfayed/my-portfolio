import React from 'react'
import Project from './Project'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import protfolio from '../Assets/pexels-markus-spiske-113850.png'

function Projects() {
    return (
        <div id='project' className='projects'>
            <h2>Here are my favorite projects <FontAwesomeIcon icon={faFire} /> </h2>
            <div className='projects__project'>
                <Project
                name='test'
                description= 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.' 
                image={protfolio}
                code="https://www.youtube.com/"
                demo='https://www.youtube.com/'
                />
                <Project
                name='test'
                description= 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.' 
                image={protfolio}
                code="https://www.youtube.com/"
                demo='https://www.youtube.com/'
                />
                <Project
                name='test'
                description= 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.' 
                image={protfolio}
                code="https://www.youtube.com/"
                demo='https://www.youtube.com/'
                />
            </div>
        </div>
    )
}

export default Projects