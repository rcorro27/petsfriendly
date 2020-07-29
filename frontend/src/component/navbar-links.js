import React from 'react'

function NavbarLinks ({ param1, param2 }) {
    return (
        <div className='collapse navbar-collapse' id='navbarResponsive'>
            <ul className='navbar-nav ml-auto'>
                <li className='nav-item active'>
                    <a className='nav-link' href='test'>{param1}
                    </a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='test'>{param2}</a>
                </li>

            </ul>
        </div>

    )
}

export default NavbarLinks
