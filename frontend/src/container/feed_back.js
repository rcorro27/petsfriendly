import React, { Component } from 'react'
import VignetteComponent from 'component/vignette-component'
// import Boutton from 'component/bouton-component'
// import BoutonComponent from '../component/bouton-component'

class FormFeedBack extends Component {
    constructor (props) {
        super(props)

        this.state = {
            count: 0,
            resultat: []

        }
        this.handleincrementMe = this.handleincrementMe.bind(this)
    }

    handleincrementMe () {
        console.log('nombre de clik', this.state.count)
        this.setState({ count: this.state.count + 1 })

        // console.log('count', this.state.count)
    }

    componentDidMount () {
        fetch('resultat-recherche.json', { method: 'GET' })
            .then(response => response.json())
            .then(response => {
                console.log('test', response)
                console.log('test', response.resultatRecherche)

                this.setState({ resultat: response.resultatRecherche })
            })
    }

    render () {
        return (

            <div>
                <form id='form-feedBack'>
                    <div>
                        {this.state.resultat.map((resultat, index) => <VignetteComponent urlPhoto={resultat.url_photo} nom={resultat.nom} secteurAction={resultat.secteur_action} className='feedBack' onClickProfil={this.handleincrementMe} key={index} />)}

                        <VignetteComponent type='button'>like {this.state.cout}</VignetteComponent>

                    </div>
                </form>
            </div>
        )
    }
}
export default FormFeedBack
