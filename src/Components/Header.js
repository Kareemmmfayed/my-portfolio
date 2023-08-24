import React from 'react'

function Header() {
    return (
        <header className='header container cover'>
            <div className='header__logo'>Kareem Fayed</div>
            <ul className='header__links'>
                <li>Home</li>
                <li>About</li>
                <li>Project</li>
                <li>Contact</li>
            </ul>
        </header>
    )
}

export default Header