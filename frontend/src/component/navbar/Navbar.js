import React from 'react'
import './navbar.css'
import NavbarLinks from './NavbarLinks'
import NavbarText from './NavbarText'

function Navbar () {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark navbar-fixed-top'>
            <div className='container'>
                <NavbarText title1='Pets Friendly' title2='Devenir Sitter ?' />
                <NavbarLinks param1='Se connecter' param2="S'inscrire" />
            </div>
        </nav>

    )
}

export default Navbar
