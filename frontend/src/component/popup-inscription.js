import React from 'react'
// import { Button, Modal } from 'react-bootstrap'

function InscriptionPopUp ({ getText, getPass, valueName }) {
    //  const [show, setShow] = useState(false)

    // const handleClose = () => setShow(false)
    return (
        <form>
            <div className='modal-body mx-3'>
                <div className='md-form mb-5'>
                    <i className='fas fa-envelope prefix grey-text' />
                    <input type='email' id='defaultForm-email' className='form-control validate' onChange={getText} value={valueName} />
                    <label data-error='wrong' data-success='right' htmlFor='defaultForm-email'>Nom :</label>

                </div>
                <div className='md-form mb-5'>
                    <i className='fas fa-envelope prefix grey-text' />
                    <input type='email' id='defaultForm-email' className='form-control validate' onChange={getText} value={valueName} />
                    <label data-error='wrong' data-success='right' htmlFor='defaultForm-email'>Prenom :</label>

                </div>
                <div className='md-form mb-5'>
                    <i className='fas fa-envelope prefix grey-text' />
                    <input type='email' id='defaultForm-email' className='form-control validate' onChange={getText} value={valueName} />
                    <label data-error='wrong' data-success='right' htmlFor='defaultForm-email'>Age :</label>

                </div>
                <div className='md-form mb-5'>
                    <i className='fas fa-envelope prefix grey-text' />
                    <input type='email' id='defaultForm-email' className='form-control validate' onChange={getText} value={valueName} />
                    <label data-error='wrong' data-success='right' htmlFor='defaultForm-email'>Email :</label>

                </div>
                <div className='md-form mb-5'>
                    <i className='fas fa-envelope prefix grey-text' />
                    <input type='email' id='defaultForm-email' className='form-control validate' onChange={getText} value={valueName} />
                    <label data-error='wrong' data-success='right' htmlFor='defaultForm-email'>Telephone :</label>

                </div>
                <div className='md-form mb-4'>
                    <i className='fas fa-lock prefix grey-text' />
                    <input type='password' id='defaultForm-pass' className='form-control validate' onChange={getPass} />
                    <label data-error='wrong' data-success='right' htmlFor='defaultForm-pass'>Mot de passe</label>
                </div>
            </div>
        </form>

    )
}

export default InscriptionPopUp
