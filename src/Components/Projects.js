import React from 'react'
import Project from './Project'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import protfolio from '../Assets/pexels-markus-spiske-113850.png'

function Projects() {
    return (
        <div className='projects'>
            <h2>Here are my favorite projects <FontAwesomeIcon icon={faFire} /> </h2>
            <div className='projects__project'>
                <Project
                name='test'
                description= 'The electricity problem is not likely to be resolved soon, as Eskom faces many challenges and constraints in improving its performance and capacity. Some of the possible solutions include' 
                image={protfolio}
                code="https://www.youtube.com/"
                demo='https://www.youtube.com/'
                />
                <Project
                name='test'
                description= 'The electricity problem is not likely to be resolved soon, as Eskom faces many challenges and constraints in improving its performance and capacity. Some of the possible solutions include' 
                image={protfolio}
                code="https://www.youtube.com/"
                demo='https://www.youtube.com/'
                />
                <Project
                name='test'
                description= 'The electricity problem is not likely to be resolved soon, as Eskom faces many challenges and constraints in improving its performance and capacity. Some of the possible solutions include' 
                image={protfolio}
                code="https://www.youtube.com/"
                demo='https://www.youtube.com/'
                />
            </div>
        </div>
    )
}

export default Projects