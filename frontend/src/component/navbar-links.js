import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import ConnectionPopUp from './popup-connection'

function NavbarLinks ({ param1, param2 }) {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    return (
        <div className='collapse navbar-collapse' id='navbarResponsive'>
            <ul className='navbar-nav ml-auto'>
                <li className='nav-item active'>
                    <Button variant='light mx-2' onClick={handleShow}>{param1}</Button>
                </li>
                <li className='nav-item'>
                    <Button variant='light'>{param2}</Button>
                </li>

            </ul>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Page Connexion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ConnectionPopUp />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Annuler
                    </Button>
                    <Button variant='primary' onClick={handleClose}>
                        Se connecter
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default NavbarLinks
