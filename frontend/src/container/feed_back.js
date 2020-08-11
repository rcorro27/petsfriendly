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
        this.handleincrementMe = this.handleincrementMe.bind()
    }

    handleincrementMe () {
        console.log('count', this.state.count)
        const newCount = this.setState({ count: this.state.count + 1 })

        this.setState({
            count: newCount
        })
        // console.log('count', this.state.count)
    }

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
                <form id='form-feedBack'>
                    <div>
                        {this.state.resultat.map((resultat, index) => <VignetteComponent urlPhoto={resultat.url_photo} nom={resultat.nom} secteurAction={resultat.secteur_action} className='feedBack' key={index} />)}

                        <VignetteComponent name='ahmed' type='button' onclick={this.handleincrementMe} />

                    </div>
                </form>
            </div>
        )
    }
}
export default FormFeedBack
