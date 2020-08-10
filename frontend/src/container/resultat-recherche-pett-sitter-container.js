import React, { Component } from 'react'
import VignetteComponent from 'component/vignette-component'
import ListItemComponent from '../component/list-item-component'

// import ahrefComponent from 'component/ahref-component'
class ResultatRecherchePetsitter extends Component {
    constructor (props) {
        super(props)

        this.state = {
            recherche: false,
            resultat: []
        }
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

    render () {
    /*    this.state.resultat.map((petsitter) => {
            console.log(petsitter.url_photo)
        })
        */
        return (
            <div>
                {this.state.resultat.map((resultat, index) => <VignetteComponent urlPhoto={resultat.url_photo} name={resultat.nom} secteurAction={resultat.secteur_action} className='toto' key={index} />)}
                {console.log(this.props.testData)}
                <ListItemComponent text={this.props.testData} />
                <button onClick={this.props.onHandleSaveOnClick}>retour recherche</button>
            </div>
        )
    }
}
export default ResultatRecherchePetsitter
