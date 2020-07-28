import React, { Component } from 'react'
import Boutton from 'component/button-inscription-component'

class FormInscription extends Component {
    render () {
        return (
            <div>

                <form id='boutton-inscription '>
                    <div class='boutton'>
                        <Boutton type='submit' id='envoi' name='envoi' value='envoyer' />
                    </div>

                </form>
            </div>
        )
    }
}
export default FormInscription
