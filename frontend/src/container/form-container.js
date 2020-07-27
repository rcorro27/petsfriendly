import React, { Component } from 'react'

import InputComponent from 'component/input-component'

class FormContainer extends Component {
    render () {
        return (
            <div>
                <h1>Formulaire usager</h1>
                <form id='form-test'>
                    <InputComponent
                        text="Nom d'usager:"
                        type='text'
                        id='userName_id'
                        name='userName'
                    />
                    <InputComponent
                        text='Nom :'
                        type='text'
                        id='nom'
                        name='nom'
                    />
                    <InputComponent
                        text='Nom :'
                        type='text'
                        id='nom'
                        name='nom'
                    />
                </form>
            </div>
        )
    }
}

export default FormContainer
