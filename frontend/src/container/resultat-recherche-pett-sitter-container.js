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
    }

    componentDidMount () {
        fetch('resultat-recherche.json', { method: 'GET' })
            .then(response => response.json())
            .then(response => {
                // console.log(response)
                const arrayTest = []
                response.resultatRecherche.map((info, index) => arrayTest.push(info))
                // console.log(arrayTest)
                this.setState({ resultat: arrayTest })
            })
    }

    handleAfficherSitterOnClick (event) {
        console.log('evenement declencher', event.target)
    }

    render () {
    /*    this.state.resultat.map((petsitter) => {
            console.log(petsitter.url_photo)
        })
        */
        return (
            <div>
                <div>

                    {this.state.resultat.map((resultat, index) => <VignetteComponent urlPhoto={resultat.url_photo} name={resultat.nom} secteurAction={resultat.secteur_action} className='resultatRechercheDiv' key={index} onClick={this.handleAfficherSitterOnClick} />)}

                </div>

                <button onClick={this.props.onHandleSaveOnClick}>retour recherche</button>
            </div>
        )
    }
}
export default ResultatRecherchePetsitter
