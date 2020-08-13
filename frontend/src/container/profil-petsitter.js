import React, { Component } from 'react'

import InputComponent from 'component/input-component'

class ProfilPettSitter extends Component {
    render () {
        return (
            // AHMED CHAQUE ELEMENT JSX DOIT AVOIR UNE ELEMENT PARENT ( ce ca le div qui envelope tout le restes)
            // ligne 21 pas la bonne syntaxe
            <div>

                <div>
                    <h1>Contacter le PetSitter</h1>

                    <h2>Laisser lui un messager</h2>
                </div>

                <form id='petSitterpopups'>
                    <p>Message</p>
                    <div className='texteArea'>
                        {/* <InputComponent text='pettesitter' type='TEXTAREA' id='message' name='message' value='message' /> */}

                    </div>
                </form>
            </div>
        )
    }
}
// tu ne exporte pas la bon classe!!! tu dois exporter la classe container dans ce cas la : FormInscription!!
export default ProfilPettSitter
