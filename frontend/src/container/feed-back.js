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
    }

    handleincrementMe (onClickProfil) {
        const newCount = this.setState({ count: this.state.count + 1 })

        this.setState({
            count: newCount
        })
        console.log('count', this.state.count)
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
                    <div id='form-feedBack'>
                        {this.state.resultat.map((resultat, index) => <VignetteComponent urlPhoto={resultat.url_photo} nom={resultat.nom} secteurAction={resultat.secteur_action} className='feedBack' onClickProfil={this.handleincrementMe.bind(this)} key={index} />)}

                        <button type='button' onClickProfil={this.handleincrementMe.bind(this)}> like :{this.state.count} </button>

                    </div>
                </form>
            </div>
        )
    }
}
export default FormFeedBack
