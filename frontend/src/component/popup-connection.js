import React from 'react'
// import { Button, Modal } from 'react-bootstrap'

function ConnectionPopUp ({ getText, getPass, valueName, valuePass }) {
    //  const [show, setShow] = useState(false)

    // const handleClose = () => setShow(false)
    return (
        <div className='modal-body mx-3'>
            <div className='md-form mb-5'>
                <i className='fas fa-envelope prefix grey-text' />
                <input type='email' id='defaultForm-email' className='form-control validate' onChange={getText} value={valueName} />
                <label data-error='wrong' data-success='right' htmlFor='defaultForm-email'>Ton Email</label>

            </div>
            <div className='md-form mb-4'>
                <i className='fas fa-lock prefix grey-text' />
                <input type='password' id='defaultForm-pass' className='form-control validate' onChange={getPass} />
                <label data-error='wrong' data-success='right' htmlFor='defaultForm-pass'>Ton mot de passe</label>
            </div>
        </div>
    )
}

export default ConnectionPopUp
