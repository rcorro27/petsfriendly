import React, { Component } from 'react'

class ConnectionPopUp extends Component {
    constructor (props) {
        super(props)

        this.state = {
            inputs: [],
            isPasswordShown: false

        }
        this.handletogglePasswordVisiblity = this.handletogglePasswordVisiblity.bind(this)
    }

    handletogglePasswordVisiblity () {
        const { isPasswordShown } = this.state
        this.setState({ isPasswordShown: !isPasswordShown })
    };

    componentDidMount () {
        fetch('inputs.json', { method: 'GET' })
            .then(response => response.json())
            .then(response => {
                this.setState({ inputs: response })
            })
    }

    render () {
        const { isPasswordShown } = this.state
        return (
            <form id='boutton-inscription '>
                <div className='modal-body mx-3'>

                    <div className='md-form mb-5'>
                        <i className='fas fa-envelope prefix grey-text' />
                        <input type='email' id='defaultForm-email' className='form-control validate' onChange='' />
                        <label data-error='wrong' data-success='right' htmlFor='defaultForm-email'>Ton Email</label>

                    </div>
                    <div className='md-form mb-4'>
                        <div className='form-group'>
                            <div className='input-group'>
                                <input type={isPasswordShown ? 'text' : 'password'} id='defaultForm-pass' className='form-control validate' data-toggle='password' />
                                <div className='input-class-append'>
                                    <div className='input-group-text'>
                                        <i
                                            className='fa fa-eye password-icon'
                                            // eslint-disable-next-line react/jsx-handler-names
                                            onClick={this.handletogglePasswordVisiblity}
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
}
export default ConnectionPopUp
