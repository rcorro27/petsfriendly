import React, { Component } from 'react'

import profilPettSitter from 'component/profilPettSitter'

class FormInscription extends Component {
    render () {
        return (
            <div>
                <h1>Contacter le PetSitter</h1>
                <h2>Laisser lui un messager</h2>
                <form id='profilPettSitter'>
                    <p>Message</p>
                    <div class='texteArea'>
                        <PetSitterInput
                            text='pettesitter'
                            type='checkbox'
                            id='petsitter'
                            name='pettesitter'
                            value='pet'
                        />
                         </form>
                        </div>

                        )
                        }
                        }
                        export default FormInscription