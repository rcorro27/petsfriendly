import React, { Component } from 'react'

import profilPettSitter from 'component/profilPettSitter'

class FormInscription extends Component {
    render () {
        return (
            // AHMED CHAQUE ELEMENT JSX DOIT AVOIR UNE ELEMENT PARENT ( ce ca le div qui envelope tout le restes)
            <div>

            <div>
                <h1>Contacter le PetSitter</h1>


                <h2>Laisser lui un messager</h2>
                </div>

            <form id = 'petSitterpopups' >
                <p>Message</p>
                    <div class='texteArea'>
                        <PetSitterInput
                            text='pettesitter'
                            type='TEXTAREA'
                            id='message'
                            name='message'
                            value='message'
                            rows="6"
                            cols= "6"
                        />
                    </div>
            </form>
                         </div>
        )
                        }
                        }
   export default profilPettSitter