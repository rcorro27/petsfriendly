import React from 'react'
import './navbar.css'

function NavbarText ({ title1, title2 }) {
    return (
        <a className='navbar-brand' href='test'>
            <img className='logo' src='src/img/logo.png' alt='' />
            <span className='name'>{title1}</span>
            <span className='titre2'>{title2}</span>
        </a>

    )
}

export default NavbarText
