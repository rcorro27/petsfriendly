import React, { Component } from 'react'
import VignetteComponent from 'component/vignette-component'
import '../css/test.css'
// import ListItemComponent from '../component/list-item-component'

// import ahrefComponent from 'component/ahref-component'
class ResultatRecherchePetsitter extends Component {
    constructor (props) {
        super(props)

        this.state = {
            recherche: false,
            resultat: []

        }
        this.handleAfficherSitterOnClick = this.handleAfficherSitterOnClick.bind(this)
        this.handleEnvoyerDemandeOnClick = this.handleEnvoyerDemandeOnClick.bind(this)
    }

    componentDidMount () {
        fetch('resultat-recherche.json', { method: 'GET' })
            .then(response => response.json())
            .then(response => {
                const arrayTest = []
                response.resultatRecherche.map((info, index) => arrayTest.push(info))

                this.setState({ resultat: arrayTest })
            })
    }

    handleAfficherSitterOnClick (event) {
        alert('Profil sitter a afficher ')
        console.log('evenement declencher', event.target)
    }

    handleEnvoyerDemandeOnClick (event) {
        alert('demande envoyer')
    }

    render () {
        const service = [
            {
                id: 1,
                description: 'Promenade',
                prix_service: 20
            },
            {
                id: 2,
                description: 'Garder Chez Vous',
                prix_service: 15
            },
            {
                id: 3,
                description: 'Garder Chez Pet Sitter',
                prix_service: 20
            }

        ]
        return (
            <div>
                <div className='row'>
                    {this.state.resultat.map((resultat, index) => <VignetteComponent urlPhoto={resultat.url_photo} nom={resultat.nom} rating={resultat.rating} className='col-lg-4 mt-3 ' key={index} onClickProfil={this.handleAfficherSitterOnClick} onClickEnvoyer={this.handleEnvoyerDemandeOnClick} classInput='fas fa-heart btn btn-outline-danger mx-auto' classInput2='fas fa-paper-plane btn btn-outline-success mx-auto' textBoutonProfil='Acceder au Profil' textBoutonEnvoyer='Envoyer une demande' servicesTotal={service} servicesSitter={resultat.services} />)}
                </div>
                <button onClick={this.props.onHandleSaveOnClick}>retour recherche</button>
            </div>
        )
    }
}
export default ResultatRecherchePetsitter
