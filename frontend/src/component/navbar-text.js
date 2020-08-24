import React from 'react'
import { Link } from 'react-router-dom'

function NavbarText ({ title1, title2 }) {
    return (
        <Link to='/' className='navbar-brand'>
            <img className='logo' src='src/img/logo.png' alt='' />
            <span className='name'>{title1}</span>
            <span className='titre2'>{title2}</span>
        </Link>

    )
}

export default NavbarText
