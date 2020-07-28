import React, { Component } from 'react'
import Boutton from 'component/button-inscription'

class FormInscription extends Component {
    render () {
        return (
            <div>

                <form id='boutton-inscription '>
                    <div class='boutton'>
                        <Boutton text='envoyer' type='submit' id='envoi' name='envoi' value='envoyer' />
                    </div>

                </form>
            </div>
        )
    }
}
export default FormInscription
