import React from 'react'

function Header() {
    return (
        <header className='header App'>
            <div className='header__logo'>Kareem Fayed</div>
            <ul className='header__links'>
                <li> Home </li>
                <li> <a href='#about'> About </a> </li>
                <li> <a href='#project'> Projects </a> </li>
                <li> <a href='#contact'> Contact </a> </li>
            </ul>
        </header>
    )
}

export default Header