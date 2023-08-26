import React from 'react'

function Project({name, description, image, code, demo}) {
    return (
        <div className='project'>
            <img src={image} alt=''/>
            <h4>{name}</h4>
            <p>{description}</p>
            <div>
                <a target="_blank" href={code} >Source code</a>
                <a target="_blank" href={demo} >Demo</a>
            </div>
        </div>
    )
}

export default Project