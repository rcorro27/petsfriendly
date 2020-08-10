import React, { Component } from 'react'
import VignetteComponent from 'component/vignette-component'

class FormFeedBack extends Component {
    constructor (props) {
        super(props)

        this.state = {

            resultatRecherche: []
        }
    }

    componentDidMount () {
        fetch('resultat-recherche.json', { method: 'GET' })
            .then(response => response.json())
            .then(response => {
                console.log(this.state.resultatRecherche[1])
                this.setState({ resultatRecherche: response })
            })
    }

    render () {
        return (
            <div>
                <form id='form-feedBack'>
                    <div>
                        {this.state.resultatRecherche.map((resultat, index) => <VignetteComponent urlPhoto={resultat.url_photo} name={resultat.nom} secteurAction={resultat.secteur_action} className='' key={index} />)}

                    </div>
                </form>
            </div>
        )
    }
}
export default FormFeedBack
