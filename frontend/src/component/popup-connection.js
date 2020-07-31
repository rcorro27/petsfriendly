// import React, { useState } from 'react'
// import { Button, Modal } from 'react-bootstrap'

function ConnectionPopUp () {
    //  const [show, setShow] = useState(false)

    // const handleClose = () => setShow(false)
    return (
        <div class='modal-body mx-3'>
            <div class='md-form mb-5'>
                <i class='fas fa-envelope prefix grey-text' />
                <input type='email' id='defaultForm-email' class='form-control validate' />
                <label data-error='wrong' data-success='right' for='defaultForm-email'>Ton Email</label>

            </div>
            <div class='md-form mb-4'>
                <i class='fas fa-lock prefix grey-text' />
                <input type='password' id='defaultForm-pass' class='form-control validate' />
                <label data-error='wrong' data-success='right' for='defaultForm-pass'>Ton mot de passe</label>
            </div>
        </div>
    )
}

export default ConnectionPopUp
