import React, { Component } from 'react'
import VignetteFeedBack from 'component/feedBack-component'

// import Boutton from 'component/bouton-component'
// import BoutonComponent from '../component/bouton-component'

class FormFeedBack extends Component {
    constructor (props) {
        super(props)

        this.state = {
            count: 0,
            valeur: '',
            resultat: []

        }
        /* this.handleincrementMe = this.handleincrementMe.bind(this) */
        this.handleChange = this.handleChange.bind(this)
        this.handelEnvoiCommentaire = this.handelEnvoiCommentaire.bind(this)
    }

    handleChange (changeEvent) {
        console.log(changeEvent.target.value)
    }

    handelEnvoiCommentaire (event) {
        this.setState({ valeur: event.target.value })
        console.log('valeur', this.state.valeur)
    }

    handleFormSubmit (formSubmitEvent) {
        formSubmitEvent.preventDefault()
    }

    /**   handleincrementMe () {
        console.log('nombre de clik', this.state.count)
        this.setState({ count: this.state.count + 1 })

        // console.log('count', this.state.count)
    } */

    componentDidMount () {
        fetch('resultat-recherche.json', { method: 'GET' })
            .then(response => response.json())
            .then(response => {
                console.log('test', response.resultatRecherche)

                this.setState({ resultat: response.resultatRecherche })
            })
    }

    render () {
        return (

            <div>
                <form id='form-feedBack' onSubmit={this.handleFormSubmit}>
                    <div>
                        {this.state.resultat.map((resultat, index) =>
                            <VignetteFeedBack
                                urlPhoto={resultat.url_photo} nom={resultat.nom} secteur_action={resultat.secteur_action}
                                type='radio' className='feedBack' key={index} onChangeEtat={this.handleChange} name={resultat.nom}
                                values={['pro', 'moyen', 'intermediaire', 'amateur', 'apprentie']}
                                onChangeTextArea={this.handelEnvoiCommentaire}
                            />

                        )}

                    </div>
                </form>
            </div>
        )
    }
}
export default FormFeedBack
