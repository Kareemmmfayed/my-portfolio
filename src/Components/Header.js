import React from 'react'

function Header() {
    return (
        <header className='header App'>
            <div className='header__logo'>Kareem Fayed</div>
            <ul className='header__links'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </header>
    )
}

export default Header