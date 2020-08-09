import React from 'react'
// import { Button, Modal } from 'react-bootstrap'

function ConnectionPopUp ({ getText, getPass, valueName, enterPress }) {
    //  const [show, setShow] = useState(false)

    // const handleClose = () => setShow(false)
    const togglePasswordVisiblity = () => {
        const { isPasswordShown } = this.state
        this.setState({ isPasswordShown: !isPasswordShown })
    }
    return (
        <form>
            <div className='modal-body mx-3'>
                <div className='md-form mb-5'>
                    <i className='fas fa-envelope prefix grey-text' />
                    <input type='email' id='defaultForm-email' className='form-control validate' onChange={getText} value={valueName} />
                    <label data-error='wrong' data-success='right' htmlFor='defaultForm-email'>Ton Email</label>

                </div>
                <div className='md-form mb-4'>
                    <i className='fas fa-lock prefix grey-text' />
                    <div className='form-group'>
                        <div className='input-group'>
                            <input type='password' id='defaultForm-pass' className='form-control validate' data-toggle='password' onChange='getPass' onKeyPress='enterPress' />
                            <div className='input-class-append'>
                                <div className='input-group-text'>
                                    <i
                                        className='fa fa-eye password-icon'
                                        onClick={this.togglePasswordVisiblity}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <label data-error='wrong' data-success='right' htmlFor='defaultForm-pass'>Ton mot de passe</label>
                </div>
            </div>
        </form>

    )
}

export default ConnectionPopUp
