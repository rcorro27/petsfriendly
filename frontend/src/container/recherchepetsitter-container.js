import React, { Component } from 'react'

import InputComponent from 'component/input-component'
import Boutton from 'component/button-inscription'

class RecherchePetsitter extends Component {
    render () {
        return (
            <div>
                <h1>Recherche Petsitter</h1>
                <form id='form-test'>
                <Boutton  id={2} name={test} value={test}/>
                </form>
            </div>
        )
    }
}

export default RecherchePetsitter